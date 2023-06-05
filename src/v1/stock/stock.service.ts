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

  async updateStockFromCard(
    userId: string,
    cardSlug: string,
    updateStock: InputStockDto[],
  ): Promise<IStock[]> {
    let stockItem = new CreateStockDto();

    for (const element of updateStock) {
      stockItem.quantity = element.quantity;
      stockItem.condition = element.condition;

      //Get Vendor
      const vendor = await this.vendorService.findOneFromOwner(
        userId,
        'PersonalCollection',
      );

      stockItem.vendor = vendor as VendorEntity;

      //Get Card
      const card = await this.cardRepository.findOne({
        where: { slug: cardSlug },
      });
      stockItem.card = card as CardEntity;

      console.log('Stock Item Check: ');

      //Check if already exsists
      const found = stockItem.vendor.stock.find((item) => {
        return (
          stockItem.card.slug === cardSlug &&
          item.condition === element.condition
        );
      });

      if (found) {
        //to update
        if (element.quantity == 0) {
          this.delete(found.id);
        } else {
          this.update(found.id, found.condition, element.quantity);
        }

        console.log('Found Items: ', found);
      } else {
        this.create(stockItem);
        console.log('No Stock Found');
      }
    }

    return null;
  }
}
