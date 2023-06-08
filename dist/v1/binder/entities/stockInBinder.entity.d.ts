import { StockEntity } from 'src/v1/stock/entities/stock.entity';
import { BinderEntity } from './binder.entity';
export declare class StockInBinderEntity {
    id: string;
    name: string;
    slug: string;
    image: string;
    stock: StockEntity;
    binder: BinderEntity;
}
