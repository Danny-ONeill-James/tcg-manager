import { Injectable } from '@nestjs/common';
import { PokemonCardsApiService } from 'src/api-connections/pokemon-cards-api/pokemon-cards-api.service';
import { ISet } from '../sets/interface/sets.interface';
import { SetsService } from '../sets/sets.service';

@Injectable()
export class CommandService {
  constructor(
    private pokemonCardsApiService: PokemonCardsApiService,
    private setsService: SetsService,
  ) {}

  async checkAllSets() {
    const apiResults = await this.pokemonCardsApiService.updateSeriesAndSets();
    return await apiResults;
  }
}
