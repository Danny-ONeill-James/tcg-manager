import { ICard } from '../cards/interface/card.interface';
import { InputStockDto } from './dto/inputStock.dto';
import { IStock } from './interface/stock.interface';
import { StockService } from './stock.service';
export declare class StockController {
    private stockService;
    constructor(stockService: StockService);
    findAll(): Promise<IStock[]>;
    getCardListForUser(userId: string): Promise<ICard[]>;
    getCardListForUserSearch(userId: string, term: string): Promise<ICard[]>;
    create(userId: string, cardSlug: string, createStockDto: InputStockDto[]): Promise<IStock[]>;
    findOneCardFromUser(userId: string, cardSlug: string): Promise<IStock[]>;
}
