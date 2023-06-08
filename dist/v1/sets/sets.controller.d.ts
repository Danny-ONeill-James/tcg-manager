import { SetsService } from './sets.service';
import { ISet } from './interface/sets.interface';
import { CreateSetDto } from './dto/create-set.dto';
export declare class SetsController {
    private setsService;
    constructor(setsService: SetsService);
    findAll(): Promise<ISet[]>;
    findOne(id: string): Promise<ISet>;
    findSetsInSeries(slug: string): Promise<ISet[]>;
    findOneBySlug(slug: string): Promise<ISet>;
    create(createSetDto: CreateSetDto): Promise<ISet>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
