import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SaleEntity } from './sale.entity';

@Entity({ name: 'Transaction' })
export class TransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => SaleEntity, (saleEntity) => saleEntity.transaction)
  sale: SaleEntity;
}
