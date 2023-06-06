import { VendorEntity } from 'src/vendors/entities/vendor.entity';

export interface IBinder {
  id: string;
  name: string;
  vendor: VendorEntity;
}
