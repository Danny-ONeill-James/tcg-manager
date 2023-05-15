import { Module } from '@nestjs/common';
import { PokemonCardsApiService } from 'src/api-connections/pokemon-cards-api/pokemon-cards-api.service';
import { CommandController } from './command.controller';
import { CommandService } from './command.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetEntity } from '../sets/entities/set.entity';
import { SetsService } from '../sets/sets.service';
import { SeriesService } from '../series/series.service';
import { SeriesEntity } from '../series/entities/series.entity';
import { GameEntity } from '../games/entities/game.entity';
import { GamesService } from '../games/games.service';
import { CardsService } from '../cards/cards.service';
import { CardEntity } from '../cards/entities/card.entity';
import { MagicTheGatheringApiService } from 'src/api-connections/magic-the-gathering-api/magic-the-gathering-api.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SetEntity, SeriesEntity, GameEntity, CardEntity]),
  ],
  controllers: [CommandController],
  providers: [
    CommandService,
    MagicTheGatheringApiService,
    PokemonCardsApiService,
    SetsService,
    SeriesService,
    GamesService,
    CardsService,
  ],
})
export class CommandModule {}
