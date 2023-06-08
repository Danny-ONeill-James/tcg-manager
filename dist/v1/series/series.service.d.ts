import { Repository } from 'typeorm';
import { GameEntity } from '../games/entities/game.entity';
import { CreateSeriesDto } from './dto/create-series.dto';
import { SeriesEntity } from './entities/series.entity';
import { ISeries } from './interface/series.interface';
export declare class SeriesService {
    private seriesRepository;
    private gamesRepository;
    constructor(seriesRepository: Repository<SeriesEntity>, gamesRepository: Repository<GameEntity>);
    findAll(): Promise<ISeries[]>;
    findOne(_id: string): Promise<ISeries>;
    findOneBySlug(_slug: string): Promise<ISeries>;
    findAllSeriesInGame(_slug: string): Promise<ISeries[]>;
    create(createSeriesDto: CreateSeriesDto): Promise<SeriesEntity>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
