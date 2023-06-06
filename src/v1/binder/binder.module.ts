import { Module } from '@nestjs/common';
import { BinderController } from './binder.controller';
import { BinderService } from './binder.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BinderEntity } from './entities/binder.entity';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BinderEntity, VendorEntity])],
  controllers: [BinderController],
  providers: [BinderService],
})
export class BinderModule {}
