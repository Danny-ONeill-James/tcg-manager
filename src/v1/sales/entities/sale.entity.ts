import { UserEntity } from 'src/users/entities/user.entity';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ECompany } from '../enums/company.enum';
import { EStatus } from '../enums/status.enum';
import { SaleItemEntity } from './saleItem.entity';
import { TransactionEntity } from './transaction.entity';

@Entity({ name: 'Sale' })
export class SaleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  company: ECompany;

  @Column()
  status: EStatus;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  value: number;

  @ManyToOne(() => VendorEntity, (vendorEntity) => vendorEntity.sale)
  vendor: UserEntity;

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
