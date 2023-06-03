import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeriesEntity } from './entities/series.entity';
import { SeriesController } from './series.controller';
import { SeriesService } from './series.service';
import { GameEntity } from '../games/entities/game.entity';
import { SetEntity } from '../sets/entities/set.entity';
import { CardEntity } from '../cards/entities/card.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SeriesEntity, GameEntity, SetEntity, CardEntity]),
  ],
  controllers: [SeriesController],
  providers: [SeriesService],
})
export class SeriesModule {}
