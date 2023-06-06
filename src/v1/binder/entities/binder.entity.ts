import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StockInBinderEntity } from './stockInBinder.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';

@Entity({ name: 'Binder' })
export class BinderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  image: string;

  @ManyToOne(() => VendorEntity, (vendorEntity) => vendorEntity.binder)
  vendor: VendorEntity;

  @ManyToOne(
    () => StockInBinderEntity,
    (stockInBinderEntity) => stockInBinderEntity.binder,
  )
  stockInBinder: StockInBinderEntity;
}
