import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorsModule } from 'src/vendors/vendors.module';
import { CardsModule } from '../cards/cards.module';
import { StockEntity } from './entities/stock.entity';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([StockEntity]),
    VendorsModule,
    CardsModule,
  ],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
