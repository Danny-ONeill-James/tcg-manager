import { UserEntity } from 'src/users/entities/user.entity';
import { SaleEntity } from 'src/v1/sales/entities/sale.entity';
import { StockEntity } from 'src/v1/stock/entities/stock.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Vendor' })
export class VendorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => UserEntity, (userEntity) => userEntity.vendorOwner)
  owner: UserEntity;

  @Column()
  image: string;

  @OneToMany(() => SaleEntity, (saleEntity) => saleEntity.vendor)
  sale: SaleEntity[];

  @OneToMany(() => StockEntity, (stockEntity) => stockEntity.vendor)
  stock: SaleEntity[];

  @ManyToMany(() => UserEntity, (userEntity) => userEntity.vendorAccess)
  users: UserEntity[];
}
