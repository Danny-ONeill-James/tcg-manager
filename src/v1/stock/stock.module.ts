import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsService } from '../cards/cards.service';
import { CardEntity } from '../cards/entities/card.entity';
import { StockEntity } from './entities/stock.entity';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { SetEntity } from '../sets/entities/set.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity, SetEntity, StockEntity])],
  controllers: [StockController],
  providers: [StockService, CardsService],
})
export class StockModule {}
