import { Injectable } from '@nestjs/common';
import { PokemonCardsApiService } from 'src/api-connections/pokemon-cards-api/pokemon-cards-api.service';
import { SetsService } from '../sets/sets.service';

@Injectable()
export class CommandService {
  constructor(
    private pokemonCardsApiService: PokemonCardsApiService,
    private setsService: SetsService,
  ) {}

  async checkAllSets() {
    //TODO: Get the results form the API
    const apiResults = await this.pokemonCardsApiService.getSetsList();
    //TODO: get the results from the database
    const databaseResults = await this.setsService.findAll();
    //TODO: Converty both into same format

    //TODO compare results
    console.log(`API: ${apiResults}`);
    console.log(`Database: ${databaseResults}`);
    //TODO: if new Set add
  }
}
