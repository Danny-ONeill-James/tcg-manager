import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsService } from 'src/v1/cards/cards.service';
import { CardEntity } from 'src/v1/cards/entities/card.entity';
import { GameEntity } from 'src/v1/games/entities/game.entity';
import { GamesService } from 'src/v1/games/games.service';
import { SeriesEntity } from 'src/v1/series/entities/series.entity';
import { SeriesService } from 'src/v1/series/series.service';
import { SetEntity } from 'src/v1/sets/entities/set.entity';
import { SetsService } from 'src/v1/sets/sets.service';
import { MagicTheGatheringApiController } from './magic-the-gathering-api.controller';
import { MagicTheGatheringApiService } from './magic-the-gathering-api.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SetEntity, SeriesEntity, GameEntity, CardEntity]),
  ],
  controllers: [MagicTheGatheringApiController],
  providers: [
    MagicTheGatheringApiService,
    SeriesService,
    GamesService,
    SetsService,
    CardsService,
  ],
})
export class MagicTheGatheringApiModule {}
