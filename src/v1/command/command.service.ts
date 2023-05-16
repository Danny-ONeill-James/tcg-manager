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

  async checkAllSets(gameSlug: string) {
    await this.pokemonCardsApiService.updateSeriesAndSets(gameSlug);
    //TODO: complete mtg API import
    return 'Updated all sets and Series In the TCGs';
  }

  async checkAllCardsInAllSets() {
    const setsList: ISet[] = await this.setsService.findAll();

    setsList.forEach(async (set) => {
      setTimeout(async () => {
        await this.checkCardsInSet(set.slug);
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
