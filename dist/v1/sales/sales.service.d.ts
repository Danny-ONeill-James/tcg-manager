import { Repository } from 'typeorm';
import { CreateSaleDto } from './dto/sale.dto';
import { CreateSaleItemDto } from './dto/saleItem.dto';
import { SaleEntity } from './entities/sale.entity';
import { ISale } from './interface/sale.interface';
import { ISaleItem } from './interface/saleItem.interface';
import { SaleItemEntity } from './entities/saleItem.entity';
export declare class SalesService {
    private saleRepository;
    private saleItemRepository;
    constructor(saleRepository: Repository<SaleEntity>, saleItemRepository: Repository<SaleItemEntity>);
    findAll(): Promise<ISale[]>;
    findOne(_id: string): Promise<ISale>;
    editOneSale(id: string, updatedSaleData: Partial<ISale>): Promise<ISale>;
    deleteSale(id: string): Promise<ISale>;
    createSale(createSaleDto: CreateSaleDto): Promise<ISale>;
    createSaleItem(createSaleItemDto: CreateSaleItemDto): Promise<ISaleItem>;
}
