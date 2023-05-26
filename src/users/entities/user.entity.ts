import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { SaleEntity } from 'src/v1/sales/entities/sale.entity';
import { StockEntity } from 'src/v1/stock/entities/stock.entity';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'User' })
export class UserEntity extends ParanoidEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  image: string;

  @ManyToOne(() => VendorEntity, (vendorEntity) => vendorEntity.owner)
  vendorOwner: VendorEntity;

  @ManyToMany(() => VendorEntity, (vendorEntity) => vendorEntity.users)
  vendorAccess: UserEntity[];
}
