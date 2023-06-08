import { ICard } from 'src/v1/cards/interface/card.interface';
export interface ISaleItem {
    id: string;
    card: ICard;
    quantity: number;
    price: number;
}
