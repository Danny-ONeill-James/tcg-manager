import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleEntity } from 'src/v1/sales/entities/sale.entity';
import { UserEntity } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SaleItemEntity } from 'src/v1/sales/entities/saleItem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleEntity, UserEntity])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
