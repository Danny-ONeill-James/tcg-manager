import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import { VendorUsersEntity } from 'src/vendors/entities/vendor.users.entity';
import { EAccountType } from '../enums/accountTypes.enum';
export declare class UserEntity extends ParanoidEntity {
    id: string;
    username: string;
    password: string;
    image: string;
    type: EAccountType;
    vendorOwner: VendorEntity[];
    vendorAccess: VendorUsersEntity;
}
