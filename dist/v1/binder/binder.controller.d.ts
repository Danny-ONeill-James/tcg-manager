import { BinderService } from './binder.service';
import { IBinder } from './interface/binder.interface';
export declare class BinderController {
    private binderService;
    constructor(binderService: BinderService);
    create(userId: string): Promise<IBinder>;
    updateStockInBinder(userId: string, binderSlug: string, cardSlug: string, quantity: number): Promise<IBinder>;
    getAllBindersForUser(userId: string): Promise<IBinder[]>;
    getSingleBinder(userId: string, slug: string): Promise<IBinder>;
}
