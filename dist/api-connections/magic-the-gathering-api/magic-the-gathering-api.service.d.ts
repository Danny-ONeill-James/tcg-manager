import { GamesService } from 'src/v1/games/games.service';
import { SeriesService } from 'src/v1/series/series.service';
import { SetsService } from 'src/v1/sets/sets.service';
export declare class MagicTheGatheringApiService {
    private gameService;
    private setService;
    private seriesService;
    constructor(gameService: GamesService, setService: SetsService, seriesService: SeriesService);
    updateMTGSeriesAndSets(gameSlug: string): Promise<void>;
    sendAxiosCall(_url: any, _config: any): Promise<any>;
}
