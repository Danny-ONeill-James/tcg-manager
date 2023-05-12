import { Injectable } from '@nestjs/common';
import { PokemonCardsApiService } from 'src/api-connections/pokemon-cards-api/pokemon-cards-api.service';
import { SetsService } from '../sets/sets.service';
import { ISet } from '../sets/interface/sets.interface';

@Injectable()
export class CommandService {
  constructor(
    private pokemonCardsApiService: PokemonCardsApiService,
    private setsService: SetsService,
  ) {}

  async checkAllSets() {
    await this.pokemonCardsApiService.updateSeriesAndSets();
    return 'Updated all sets and Series In the Pokemon Game';
  }

  async checkAllCardsInAllSets() {
    const setsList: ISet[] = await this.setsService.findAll();

    setsList.forEach(async (set) => {
      setTimeout(async () => {
        const apiResults = await this.checkCardsInSet(set.slug);
      }, 10000);
    });
  }

  async checkCardsInSet(setSlug: string) {
    const apiResults = await this.pokemonCardsApiService.updateCardsInSet(
      setSlug,
    );
    return await apiResults;
  }
}
