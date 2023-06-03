import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeriesModule } from '../series/series.module';
import { SetEntity } from './entities/set.entity';
import { SetsController } from './sets.controller';
import { SetsService } from './sets.service';

@Module({
  imports: [TypeOrmModule.forFeature([SetEntity]), SeriesModule],
  controllers: [SetsController],
  providers: [SetsService],
})
export class SetsModule {}
