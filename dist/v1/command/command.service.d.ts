import { PokemonCardsApiService } from 'src/api-connections/pokemon-cards-api/pokemon-cards-api.service';
import { SetsService } from '../sets/sets.service';
export declare class CommandService {
    private pokemonCardsApiService;
    private setsService;
    constructor(pokemonCardsApiService: PokemonCardsApiService, setsService: SetsService);
    checkAllSets(gameSlug: string): Promise<string>;
    checkAllCardsInAllSets(): Promise<void>;
    checkCardsInSet(setSlug: string): Promise<any>;
}
