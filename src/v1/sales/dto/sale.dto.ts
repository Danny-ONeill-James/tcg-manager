import { SaleItemEntity } from '../entities/saleItem.entity';
import { TransactionEntity } from '../entities/transaction.entity';

export class CreateSaleDto {
  id: string;
  saleItem?: SaleItemEntity[];
  transaction: TransactionEntity[];
}
