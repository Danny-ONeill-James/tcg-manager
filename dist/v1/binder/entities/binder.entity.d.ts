import { StockInBinderEntity } from './stockInBinder.entity';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
export declare class BinderEntity {
    id: string;
    name: string;
    slug: string;
    image: string;
    vendor: VendorEntity;
    stockInBinder: StockInBinderEntity[];
}
