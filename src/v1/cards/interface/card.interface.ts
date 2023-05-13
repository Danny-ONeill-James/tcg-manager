import { SetEntity } from 'src/v1/sets/entities/set.entity';
import { StockEntity } from 'src/v1/stock/entities/stock.entity';

export interface ICard {
  id: string;
  name: string;
  slug: string;
  image: string;
  set: SetEntity;
  cardNumber: string;
  stock?: StockEntity[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
