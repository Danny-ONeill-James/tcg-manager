import { SaleItemEntity } from 'src/v1/sales/entities/saleItem.entity';
import { SetEntity } from 'src/v1/sets/entities/set.entity';
import { StockEntity } from 'src/v1/stock/entities/stock.entity';
export declare class CardEntity {
    id: string;
    name: string;
    slug: string;
    image: string;
    cardNumber: string;
    set: SetEntity;
    stock: StockEntity[];
    saleItem: SaleItemEntity[];
}
