import { TransactionEntity } from '../entities/transaction.entity';
import { ECompany } from '../enums/company.enum';
import { EStatus } from '../enums/status.enum';
import { ISaleItem } from './saleItem.interface';
export interface ISale {
    id: string;
    company: ECompany;
    status: EStatus;
    value: number;
    saleDate: Date;
    saleItem?: ISaleItem[];
    transaction?: TransactionEntity[];
}
