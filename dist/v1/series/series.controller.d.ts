import { CreateSeriesDto } from './dto/create-series.dto';
import { ISeries } from './interface/series.interface';
import { SeriesService } from './series.service';
export declare class SeriesController {
    private seriesService;
    constructor(seriesService: SeriesService);
    findAll(): Promise<ISeries[]>;
    findOne(id: string): Promise<ISeries>;
    findAllSeriesInGame(slug: string): Promise<ISeries[]>;
    findOneBySlug(slug: string): Promise<ISeries>;
    create(createGameDto: CreateSeriesDto): Promise<ISeries>;
    deleteAll(): Promise<void>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
