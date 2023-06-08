import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import { BinderController } from './binder.controller';
import { BinderService } from './binder.service';
import { BinderEntity } from './entities/binder.entity';
import { StockInBinderEntity } from './entities/stockInBinder.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BinderEntity, StockInBinderEntity, VendorEntity]),
  ],
  controllers: [BinderController],
  providers: [BinderService],
})
export class BinderModule {}
