import { Injectable } from '@nestjs/common';
import { PokemonCardsApiService } from 'src/api-connections/pokemon-cards-api/pokemon-cards-api.service';
import { MagicTheGatheringApiService } from 'src/api-connections/magic-the-gathering-api/magic-the-gathering-api.service';
import { ISet } from '../sets/interface/sets.interface';
import { SetsService } from '../sets/sets.service';

@Injectable()
export class CommandService {
  constructor(
    private pokemonCardsApiService: PokemonCardsApiService,
    private magicTheGatheringApiService: MagicTheGatheringApiService,
    private setsService: SetsService,
  ) {}

  async checkAllSets(gameSlug: string) {
    await this.pokemonCardsApiService.updateSeriesAndSets(gameSlug);
    //TODO: complete mtg API import
    //await this.magicTheGatheringApiService.updateMTGSeriesAndSets(gameSlug);
    return 'Updated all sets and Series In the TCGs';
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
