import { UserEntity } from 'src/users/entities/user.entity';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';

export interface IBinder {
  id: string;
  name: string;
  vendor: VendorEntity;
}
