import { ISale } from 'src/v1/sales/interface/sale.interface';
import { IStock } from 'src/v1/stock/interface/stock.interface';

export interface IUser {
  id: string;
  username: string;
  password: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}
