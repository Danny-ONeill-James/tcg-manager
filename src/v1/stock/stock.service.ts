import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import { VendorsService } from 'src/vendors/vendors.service';
import { Repository } from 'typeorm';
import { CardsService } from '../cards/cards.service';
import { CardEntity } from '../cards/entities/card.entity';
import { ECondition } from '../cards/enums/quality.enum';
import { CreateStockDto } from './dto/createStock.dto';
import { InputStockDto } from './dto/inputStock.dto';
import { StockEntity } from './entities/stock.entity';
import { IStock } from './interface/stock.interface';
import { Console } from 'console';
import { IVendor } from 'src/vendors/interfaces/vendor.interface';
import { ICard } from '../cards/interface/card.interface';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(StockEntity)
    private stockRepository: Repository<StockEntity>,
    @InjectRepository(VendorEntity)
    @InjectRepository(CardEntity)
    private cardRepository: Repository<CardEntity>,
    private cardsService: CardsService,
    private vendorService: VendorsService,
  ) {}

  findAll(): Promise<IStock[]> {
    return this.stockRepository.find();
  }

  async findOne(cardId: string): Promise<IStock> {
    const returnedCard = await this.cardsService.findOne(cardId);
    console.log(returnedCard);
    return this.stockRepository.findOne({
      where: { card: returnedCard },
    });
  }

  async findStockFromCard(
    _userId: string,
    _cardSlug: string,
  ): Promise<IStock[]> {
    const returnedStockItems: IStock[] = await this.stockRepository.find({
      where: {
        card: { slug: _cardSlug },
        vendor: { user: { id: _userId } },
      },
    });
    return returnedStockItems;
  }

  async create(createStockDto: CreateStockDto) {
    const newStock = this.stockRepository.create({
      ...createStockDto,
    });
    return this.stockRepository.save(newStock);
  }

  async update(_id: string, _conditon: ECondition, _quantity: number) {
    return this.stockRepository.save({ id: _id, quantity: _quantity });
  }

  async delete(_id: string) {
    return this.stockRepository.delete(_id);
  }

  async getCardListForUser(_userId: string): Promise<ICard[]> {
    const cardList: ICard[] = [];

    const returnedStockItems: IVendor = await this.cardRepository.findOne({
      where: { stock: { vendor: { user: { id: _userId } } } },
      relations: {
        stock: {
          vendor: { user: true },
          card: { stock: true, set: { series: { game: true } } },
        },
      },
    });

    for (const element of returnedStockItems.stock) {
      const isCardAlreadyInList = cardList.some(
        (card) => card.id === element.card.id,
      );
      if (!isCardAlreadyInList) {
        cardList.push(element.card);
      }
    }

    return cardList;
  }

  async updateStockFromCard(
    _id: string,
    _cardSlug: string,
    _updateStock: InputStockDto[],
  ): Promise<IStock[]> {
    let stockItem = new CreateStockDto();

    const returnedStockItems: IStock[] = await this.stockRepository.find({
      where: {
        card: { slug: _cardSlug },
        vendor: { user: { id: _id } },
      },
      relations: { card: true, vendor: { user: true } },
    });

    if (returnedStockItems.length > 0) {
      stockItem.vendor = returnedStockItems[0].vendor as VendorEntity;
      stockItem.card = returnedStockItems[0].card;
    }

    for (const element of _updateStock) {
      stockItem.quantity = element.quantity;
      stockItem.condition = element.condition;

      const found = returnedStockItems.find((item) => {
        return item.condition === stockItem.condition;
      });

      if (found) {
        if (element.quantity == 0) {
          this.delete(found.id);
        } else {
          this.update(found.id, found.condition, element.quantity);
        }
      } else {
        this.create(stockItem);
      }
    }
    return null;
  }
}
