import { UserEntity } from 'src/users/entities/user.entity';
import { BinderEntity } from 'src/v1/binder/entities/binder.entity';
import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { SaleEntity } from 'src/v1/sales/entities/sale.entity';
import { StockEntity } from 'src/v1/stock/entities/stock.entity';
import { VendorUsersEntity } from './vendor.users.entity';
export declare class VendorEntity extends ParanoidEntity {
    id: string;
    name: string;
    slug: string;
    user: UserEntity;
    image: string;
    sale: SaleEntity[];
    stock: StockEntity[];
    binder: BinderEntity[];
    users: VendorUsersEntity[];
}
