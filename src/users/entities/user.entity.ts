import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import { VendorUsersEntity } from 'src/vendors/entities/vendor.users.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { EAccountType } from '../enums/accountTypes.enum';

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

  @Column()
  type: EAccountType;

  @OneToMany(() => VendorEntity, (vendorEntity) => vendorEntity.user)
  vendorOwner: VendorEntity[];

  @OneToMany(
    () => VendorUsersEntity,
    (vendorUserEntity) => vendorUserEntity.user,
  )
  vendorAccess: VendorUsersEntity;
}
