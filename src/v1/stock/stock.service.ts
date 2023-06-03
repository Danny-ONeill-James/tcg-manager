import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardsService } from '../cards/cards.service';
import { CardEntity } from '../cards/entities/card.entity';
import { ECondition } from '../cards/enums/quality.enum';
import { ICard } from '../cards/interface/card.interface';
import { CreateStockDto } from './dto/createStock.dto';
import { InputStockDto } from './dto/inputStock.dto';
import { StockEntity } from './entities/stock.entity';
import { IStock } from './interface/stock.interface';
import { IVendor } from 'src/vendors/interfaces/vendor.interface';
import { VendorsService } from 'src/vendors/vendors.service';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(StockEntity)
    private stockRepository: Repository<StockEntity>,
    private cardsService: CardsService,
    private vendorService: VendorsService,
  ) {}

  findAll(): Promise<IStock[]> {
    return this.stockRepository.find();
  }

  async findOne(cardId: string): Promise<IStock> {
    const returnedCard = await this.cardsService.findOne(cardId);
    console.log(await returnedCard);
    return this.stockRepository.findOne({
      where: { card: returnedCard },
    });
  }

  async checkStock(inputStockDto: InputStockDto): Promise<IStock> {
    const _card: ICard = await this.cardsService.findOne(inputStockDto.cardId);
    console.log('Card', _card);
    const _vendor: IVendor = await this.vendorService.findOne(
      inputStockDto.vendorId,
    );
    console.log('Vendor', _vendor);
    const inDatabase = await this.stockRepository.findOne({
      where: { card: { id: _card.id } },
    });

    if (!(await inDatabase)) {
      const newStockItem: CreateStockDto = {
        card: _card as CardEntity,
        quantity: inputStockDto.quantity,
        condition: ECondition.NearMint,
        vendor: _vendor as VendorEntity,
      };
      this.create(newStockItem);
      console.log(
        'Did not find stock adding: ' +
          newStockItem.card.name +
          '' +
          newStockItem.condition,
      );
    } else {
      this.update(await inDatabase.id, inputStockDto.quantity);
      console.log('Found ' + _card.name + ', will update');
    }

    return null;
  }

  async create(createStockDto: CreateStockDto) {
    const newStock = this.stockRepository.create({
      ...createStockDto,
    });
    return this.stockRepository.save(newStock);
  }

  async update(_id: string, _quantity: number) {
    return this.stockRepository.save({ id: _id, quantity: _quantity });
  }
}
