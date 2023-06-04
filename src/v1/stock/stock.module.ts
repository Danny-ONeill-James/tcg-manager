import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import { VendorsModule } from 'src/vendors/vendors.module';
import { CardsModule } from '../cards/cards.module';
import { CardEntity } from '../cards/entities/card.entity';
import { StockEntity } from './entities/stock.entity';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CardEntity, VendorEntity, StockEntity]),
    VendorsModule,
    CardsModule,
  ],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
