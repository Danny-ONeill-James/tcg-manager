import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SaleItemEntity } from './saleItem.entity';
import { TransactionEntity } from './transaction.entity';

@Entity({ name: 'Sale' })
export class SaleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => SaleItemEntity, (saleItemEntity) => saleItemEntity.sale)
  saleItem: SaleItemEntity[];

  @OneToMany(
    () => TransactionEntity,
    (transactionEntity) => transactionEntity.sale,
  )
  transaction: TransactionEntity[];

  @Column()
  saleDate: Date;
}
