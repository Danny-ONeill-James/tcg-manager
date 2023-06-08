import { CardEntity } from 'src/v1/cards/entities/card.entity';
import { SaleEntity } from './sale.entity';
export declare class SaleItemEntity {
    id: string;
    sale: SaleEntity;
    card: CardEntity;
    quantity: number;
    price: number;
}
