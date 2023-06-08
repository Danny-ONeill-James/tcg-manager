import { UserEntity } from 'src/users/entities/user.entity';
import { ECompany } from '../enums/company.enum';
import { EStatus } from '../enums/status.enum';
import { SaleItemEntity } from './saleItem.entity';
import { TransactionEntity } from './transaction.entity';
export declare class SaleEntity {
    id: string;
    company: ECompany;
    status: EStatus;
    value: number;
    vendor: UserEntity;
    saleItem: SaleItemEntity[];
    transaction: TransactionEntity[];
    saleDate: Date;
}
