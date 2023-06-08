import { BinderEntity } from 'src/v1/binder/entities/binder.entity';
import { CardEntity } from 'src/v1/cards/entities/card.entity';
import { ECondition } from 'src/v1/cards/enums/quality.enum';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
export declare class StockEntity {
    id: string;
    card: CardEntity;
    vendor: VendorEntity;
    binder: BinderEntity[];
    quantity: number;
    condition: ECondition;
}
