import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import { IVendor } from 'src/vendors/interfaces/vendor.interface';
import { VendorsService } from 'src/vendors/vendors.service';
import { Repository } from 'typeorm';
import { CardsService } from '../cards/cards.service';
import { CardEntity } from '../cards/entities/card.entity';
import { CreateStockDto } from './dto/createStock.dto';
import { InputStockDto } from './dto/inputStock.dto';
import { StockEntity } from './entities/stock.entity';
import { IStock } from './interface/stock.interface';
import { ECondition } from '../cards/enums/quality.enum';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(StockEntity)
    private stockRepository: Repository<StockEntity>,
    @InjectRepository(VendorEntity)
    private vendorRepository: Repository<VendorEntity>,
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

  async findOneCardFromUser(
    _userId: string,
    _cardSlug: string,
  ): Promise<IStock[]> {
    console.log('Input: Card', _cardSlug, 'UserId: ', _userId);
    const returnedCard: CardEntity = await this.cardRepository.findOne({
      where: { slug: _cardSlug },
    });
    console.log('returned Card: ', returnedCard);
    const returnedVendor: IVendor = await this.vendorService.findOneFromOwner(
      _userId,
      'PersonalCollection',
    );
    console.log('returned vendor: ', returnedVendor);
    const returnedStockItems = await this.stockRepository.find({
      where: {
        card: returnedCard as CardEntity,
        vendor: returnedVendor as VendorEntity,
      },
      relations: { card: true, vendor: true },
    });
    console.log('returned Stock: ', returnedStockItems);
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
