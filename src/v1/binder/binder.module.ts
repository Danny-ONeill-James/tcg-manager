import { Module } from '@nestjs/common';
import { BinderController } from './binder.controller';
import { BinderService } from './binder.service';

@Module({
  controllers: [BinderController],
  providers: [BinderService]
})
export class BinderModule {}
