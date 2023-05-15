import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleItemEntity } from '../sales/entities/saleItem.entity';
import { SetEntity } from '../sets/entities/set.entity';
import { StockEntity } from '../stock/entities/stock.entity';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { CardEntity } from './entities/card.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CardEntity,
      SaleItemEntity,
      SetEntity,
      StockEntity,
    ]),
  ],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
