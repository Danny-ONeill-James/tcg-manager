import { UserEntity } from 'src/users/entities/user.entity';
import { SaleItemEntity } from '../entities/saleItem.entity';
import { TransactionEntity } from '../entities/transaction.entity';
import { ECompany } from '../enums/company.enum';
import { EStatus } from '../enums/status.enum';
export declare class CreateSaleDto {
    id: string;
    company: ECompany;
    status: EStatus;
    saleDate: Date;
    saleItem?: SaleItemEntity[];
    transaction: TransactionEntity[];
    user?: UserEntity;
}
export declare class EditSaleDto {
    id: string;
    company?: ECompany;
    status?: EStatus;
    saleDate?: Date;
    saleItem?: SaleItemEntity[];
    transaction?: TransactionEntity[];
    user?: UserEntity;
}
