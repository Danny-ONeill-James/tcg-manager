import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import { StockInBinderEntity } from '../entities/stockInBinder.entity';

export interface IBinder {
  id: string;
  name: string;
  vendor: VendorEntity;
  stockInBinder?: StockInBinderEntity[];
}
