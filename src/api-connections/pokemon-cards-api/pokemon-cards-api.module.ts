import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetEntity } from 'src/v1/sets/entities/set.entity';
import { PokemonCardsApiController } from './pokemon-cards-api.controller';
import { PokemonCardsApiService } from './pokemon-cards-api.service';

@Module({
  imports: [TypeOrmModule.forFeature([SetEntity])],
  controllers: [PokemonCardsApiController],
  providers: [PokemonCardsApiService],
})
export class PokemonCardsApiModule {}
