import { CardsService } from 'src/v1/cards/cards.service';
import { GamesService } from 'src/v1/games/games.service';
import { ISeries } from 'src/v1/series/interface/series.interface';
import { SeriesService } from 'src/v1/series/series.service';
import { ISet } from 'src/v1/sets/interface/sets.interface';
import { SetsService } from 'src/v1/sets/sets.service';
export declare class PokemonCardsApiService {
    private cardsService;
    private gameService;
    private setService;
    private seriesService;
    constructor(cardsService: CardsService, gameService: GamesService, setService: SetsService, seriesService: SeriesService);
    updateSeriesAndSets(gameSlug: string): Promise<any>;
    CheckAndUpdateSet(item: any, setList: ISet[]): Promise<ISet[]>;
    CheckAndUpdateSeries(item: any, seriesList: ISeries[], game: any): Promise<ISeries[]>;
    updateCardsInSet(setSlug: string): Promise<any>;
    CheckCards(returnedData: any, inputSet: any): Promise<void>;
    sendAxiosCall(_url: any, _config: any): Promise<any>;
}
