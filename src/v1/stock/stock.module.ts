import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockEntity } from './entities/stock.entity';
import { CardEntity } from '../cards/entities/card.entity';
import { StockController } from './stock.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity, StockEntity])],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
