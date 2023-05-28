import { UserEntity } from 'src/users/entities/user.entity';
import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { SaleEntity } from 'src/v1/sales/entities/sale.entity';
import { StockEntity } from 'src/v1/stock/entities/stock.entity';
import {
  Column,
  Entity,
  ManyToMany,
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

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.vendorOwner)
  owner: UserEntity;

  @Column()
  image: string;

  @OneToMany(() => SaleEntity, (saleEntity) => saleEntity.vendor)
  sale: SaleEntity[];

  @OneToMany(() => StockEntity, (stockEntity) => stockEntity.vendor)
  stock: StockEntity[];

  @OneToMany(
    () => VendorUsersEntity,
    (vendorUserEntity) => vendorUserEntity.vendor,
  )
  users: VendorUsersEntity;
}
