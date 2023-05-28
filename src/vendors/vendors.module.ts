import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { SaleEntity } from 'src/v1/sales/entities/sale.entity';
import { StockEntity } from 'src/v1/stock/entities/stock.entity';
import { VendorEntity } from './entities/vendor.entity';
import { VendorUsersEntity } from './entities/vendor.users.entity';
import { VendorsController } from './vendors.controller';
import { VendorsService } from './vendors.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SaleEntity,
      StockEntity,
      VendorEntity,
      VendorUsersEntity,
      UserEntity,
    ]),
  ],
  controllers: [VendorsController],
  providers: [VendorsService],
})
export class VendorsModule {}
