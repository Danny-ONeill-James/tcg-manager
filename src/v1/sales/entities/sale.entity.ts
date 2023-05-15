import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SaleItemEntity } from './saleItem.entity';
import { TransactionEntity } from './transaction.entity';
import { UserEntity } from 'src/system/users/entities/user.entity';

@Entity({ name: 'Sale' })
export class SaleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.sale)
  user: UserEntity;

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
