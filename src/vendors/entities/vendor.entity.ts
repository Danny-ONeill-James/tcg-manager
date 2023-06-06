import { UserEntity } from 'src/users/entities/user.entity';
import { BinderEntity } from 'src/v1/binder/entities/binder.entity';
import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { SaleEntity } from 'src/v1/sales/entities/sale.entity';
import { StockEntity } from 'src/v1/stock/entities/stock.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { VendorUsersEntity } from './vendor.users.entity';

@Entity({ name: 'Vendor' })
export class VendorEntity extends ParanoidEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.vendorOwner)
  user: UserEntity;

  @Column()
  image: string;

  @OneToMany(() => SaleEntity, (saleEntity) => saleEntity.vendor)
  sale: SaleEntity[];

  @OneToMany(() => StockEntity, (stockEntity) => stockEntity.vendor)
  stock: StockEntity[];

  @OneToMany(() => BinderEntity, (binderEntity) => binderEntity.vendor)
  binder: BinderEntity[];

  @OneToMany(
    () => VendorUsersEntity,
    (vendorUserEntity) => vendorUserEntity.vendor,
  )
  users: VendorUsersEntity[];
}
