import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { ICard } from './interface/card.interface';
export declare class CardsController {
    private cardsService;
    constructor(cardsService: CardsService);
    findAll(): Promise<ICard[]>;
    findOne(id: string): Promise<ICard>;
    findForActiveSearch(searchTerm: string): Promise<ICard[]>;
    findOneBySlug(slug: string): Promise<ICard>;
    findAllCardsInSet(slug: string): Promise<ICard[]>;
    create(createCardDto: CreateCardDto): Promise<ICard>;
    update(updateGameDto: CreateCardDto, inputId: string): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
