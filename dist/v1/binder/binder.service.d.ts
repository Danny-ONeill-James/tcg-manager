import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import { Repository } from 'typeorm';
import { BinderEntity } from './entities/binder.entity';
import { StockInBinderEntity } from './entities/stockInBinder.entity';
import { IBinder } from './interface/binder.interface';
export declare class BinderService {
    private binderRepository;
    private stockInBinderRepository;
    private vendorRepository;
    constructor(binderRepository: Repository<BinderEntity>, stockInBinderRepository: Repository<StockInBinderEntity>, vendorRepository: Repository<VendorEntity>);
    getSingleBinder(userId: string, binderSlug: string): Promise<IBinder>;
    getAllBindersForUser(userId: string): Promise<IBinder[]>;
    createBinder(userId: string): Promise<IBinder>;
    updateStockInBinder(userId: string, binderSlug: string, cardSlug: string, quantity: number): Promise<IBinder>;
}
