import { UserEntity } from 'src/users/entities/user.entity';
import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { VendorEntity } from './vendor.entity';
export declare class VendorUsersEntity extends ParanoidEntity {
    id: string;
    user: UserEntity[];
    vendor: VendorEntity[];
}
