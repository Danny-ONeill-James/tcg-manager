import { TransactionEntity } from '../entities/transaction.entity';
import { ISaleItem } from './saleItem.interface';

export interface ISale {
  id: string;
  saleItem?: ISaleItem[];
  transaction?: TransactionEntity[];
}
