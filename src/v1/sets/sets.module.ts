import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeriesEntity } from '../series/entities/series.entity';
import { SetsController } from './sets.controller';
import { SetsService } from './sets.service';

@Module({
  imports: [TypeOrmModule.forFeature([SeriesEntity])],
  controllers: [SetsController],
  providers: [SetsService],
})
export class SetsModule {}
