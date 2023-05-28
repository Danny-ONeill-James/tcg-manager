import { UserEntity } from 'src/users/entities/user.entity';
import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VendorEntity } from './vendor.entity';

@Entity({ name: 'VendorUsers' })
export class VendorUsersEntity extends ParanoidEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.vendorAccess)
  user: UserEntity[];

  @ManyToOne(() => VendorEntity, (vendorEntity) => vendorEntity.users)
  vendor: VendorEntity[];
}
