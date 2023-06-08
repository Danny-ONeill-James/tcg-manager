import { Repository } from 'typeorm';
import { CreateSetDto } from './dto/create-set.dto';
import { SetEntity } from './entities/set.entity';
import { ISet } from './interface/sets.interface';
import { SeriesService } from '../series/series.service';
export declare class SetsService {
    private setsRepository;
    private seriesService;
    constructor(setsRepository: Repository<SetEntity>, seriesService: SeriesService);
    findAll(): Promise<ISet[]>;
    findOne(_id: string): Promise<ISet>;
    findOneBySlug(_slug: string): Promise<ISet>;
    findSetsInSeries(_slug: string): Promise<ISet[]>;
    create(createSetDto: CreateSetDto): Promise<SetEntity>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
