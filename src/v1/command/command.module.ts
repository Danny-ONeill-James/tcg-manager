import { Module } from '@nestjs/common';
import { PokemonCardsApiService } from 'src/api-connections/pokemon-cards-api/pokemon-cards-api.service';
import { CommandController } from './command.controller';
import { CommandService } from './command.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetEntity } from '../sets/entities/set.entity';
import { SetsService } from '../sets/sets.service';

@Module({
  imports: [TypeOrmModule.forFeature([SetEntity])],
  controllers: [CommandController],
  providers: [CommandService, PokemonCardsApiService, SetsService],
})
export class CommandModule {}
