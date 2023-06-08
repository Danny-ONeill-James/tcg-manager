import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import { Repository } from 'typeorm';
import { CardsService } from '../cards/cards.service';
import { CardEntity } from '../cards/entities/card.entity';
import { ECondition } from '../cards/enums/quality.enum';
import { ICard } from '../cards/interface/card.interface';
import { CreateStockDto } from './dto/createStock.dto';
import { InputStockDto } from './dto/inputStock.dto';
import { StockEntity } from './entities/stock.entity';
import { IStock } from './interface/stock.interface';
export declare class StockService {
    private stockRepository;
    private vendorRepository;
    private cardRepository;
    private cardsService;
    constructor(stockRepository: Repository<StockEntity>, vendorRepository: Repository<VendorEntity>, cardRepository: Repository<CardEntity>, cardsService: CardsService);
    findAll(): Promise<IStock[]>;
    findOne(cardId: string): Promise<IStock>;
    findStockFromCard(_userId: string, _cardSlug: string): Promise<IStock[]>;
    getCardListForUserSearch(userId: string, term: string): Promise<ICard[]>;
    create(createStockDto: CreateStockDto): Promise<StockEntity>;
    update(_id: string, _conditon: ECondition, _quantity: number): Promise<{
        id: string;
        quantity: number;
    } & StockEntity>;
    delete(_id: string): Promise<import("typeorm").DeleteResult>;
    getCardListForUser(_userId: string): Promise<ICard[]>;
    updateStockFromCard(_id: string, _cardSlug: string, _updateStock: InputStockDto[]): Promise<IStock[]>;
}
