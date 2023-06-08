import { CreateSaleDto } from './dto/sale.dto';
import { CreateSaleItemDto } from './dto/saleItem.dto';
import { ISale } from './interface/sale.interface';
import { ISaleItem } from './interface/saleItem.interface';
import { SalesService } from './sales.service';
export declare class SalesController {
    private salesService;
    constructor(salesService: SalesService);
    findAll(): Promise<ISale[]>;
    findOne(id: string): Promise<ISale>;
    createSale(createSaleDto: CreateSaleDto): Promise<ISale>;
    editOneSale(id: string, updatedSaleData: Partial<ISale>): Promise<ISale>;
    createSaleItem(createSaleItemDto: CreateSaleItemDto): Promise<ISaleItem>;
    deleteSale(id: string): Promise<ISale>;
}
