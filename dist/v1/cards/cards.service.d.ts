import { Repository } from 'typeorm';
import { SetEntity } from '../sets/entities/set.entity';
import { CreateCardDto } from './dto/create-card.dto';
import { CardEntity } from './entities/card.entity';
import { ICard } from './interface/card.interface';
export declare class CardsService {
    private cardRepository;
    private setRepository;
    constructor(cardRepository: Repository<CardEntity>, setRepository: Repository<SetEntity>);
    findAll(): Promise<ICard[]>;
    findOne(_id: string): Promise<ICard>;
    findForActiveSearch(_searchTerm: string): Promise<ICard[]>;
    findOneBySlug(_slug: string): Promise<ICard>;
    findAllCardsInSet(_slug: string): Promise<ICard[]>;
    create(createCardDto: CreateCardDto): Promise<CardEntity>;
    update(inputId: string, updateCardDto: CreateCardDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
