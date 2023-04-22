import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeriesEntity } from './entities/series.entity';
import { SeriesController } from './series.controller';
import { SeriesService } from './series.service';

@Module({
  imports: [TypeOrmModule.forFeature([SeriesEntity])],
  controllers: [SeriesController],
  providers: [SeriesService],
})
export class SeriesModule {}
