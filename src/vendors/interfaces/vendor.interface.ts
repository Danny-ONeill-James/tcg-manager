import { User } from 'src/users/users.service';
import { SaleEntity } from 'src/v1/sales/entities/sale.entity';
import { IStock } from 'src/v1/stock/interface/stock.interface';
import { VendorUsersEntity } from '../entities/vendor.users.entity';

export interface IVendor {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  owner?: User;
  slug?: string;
  image?: string;
  sale?: SaleEntity[];
  stock?: IStock[];
  VendorUsers?: VendorUsersEntity;
}
