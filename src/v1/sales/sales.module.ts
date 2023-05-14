import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from '../cards/entities/card.entity';
import { SaleEntity } from './entities/sale.entity';
import { SaleItemEntity } from './entities/saleItem.entity';
import { TransactionEntity } from './entities/transaction.entity';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CardEntity,
      SaleEntity,
      SaleItemEntity,
      TransactionEntity,
    ]),
  ],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
