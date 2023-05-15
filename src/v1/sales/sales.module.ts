import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/system/users/entities/user.entity';
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
      UserEntity,
    ]),
  ],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
