import { Injectable } from '@nestjs/common';
import { PokemonCardsApiService } from 'src/api-connections/pokemon-cards-api/pokemon-cards-api.service';

@Injectable()
export class CommandService {
  constructor(private pokemonCardsApiService: PokemonCardsApiService) {}

  async checkAllSets() {
    await this.pokemonCardsApiService.updateSeriesAndSets();
    return 'Updated all sets and Series In the Pokemon Game';
  }

  async checkCardsInSet() {
    const setId: string = 'base1';
    const apiResults = await this.pokemonCardsApiService.updateCardsInSet(
      setId,
    );
    return await apiResults;
  }
}
