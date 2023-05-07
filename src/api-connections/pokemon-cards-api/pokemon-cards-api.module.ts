import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeriesEntity } from 'src/v1/series/entities/series.entity';
import { SeriesService } from 'src/v1/series/series.service';
import { SetEntity } from 'src/v1/sets/entities/set.entity';
import { PokemonCardsApiController } from './pokemon-cards-api.controller';
import { PokemonCardsApiService } from './pokemon-cards-api.service';
import { GamesService } from 'src/v1/games/games.service';
import { GameEntity } from 'src/v1/games/entities/game.entity';
import { SetsService } from 'src/v1/sets/sets.service';

@Module({
  imports: [TypeOrmModule.forFeature([SetEntity, SeriesEntity, GameEntity])],
  controllers: [PokemonCardsApiController],
  providers: [PokemonCardsApiService, SeriesService, GamesService, SetsService],
})
export class PokemonCardsApiModule {}
