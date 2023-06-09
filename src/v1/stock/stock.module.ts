import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorsModule } from 'src/vendors/vendors.module';
import { CardsModule } from '../cards/cards.module';
import { StockEntity } from './entities/stock.entity';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import { CardEntity } from '../cards/entities/card.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CardEntity,
      UserEntity,
      StockEntity,
      VendorEntity,
    ]),
    VendorsModule,
    CardsModule,
  ],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
