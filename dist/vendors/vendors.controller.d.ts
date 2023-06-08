import { CreateVendorDto } from './dtos/createVendor.dto';
import { IVendor } from './interfaces/vendor.interface';
import { VendorsService } from './vendors.service';
export declare class VendorsController {
    private vendorService;
    constructor(vendorService: VendorsService);
    findOne(vendorId: string): Promise<IVendor>;
    create(createVendorDto: CreateVendorDto): Promise<IVendor>;
    getWhereOwner(id: string): Promise<IVendor[]>;
    findOneFromOwner(userId: string, vendorSlug: string): Promise<IVendor>;
}
