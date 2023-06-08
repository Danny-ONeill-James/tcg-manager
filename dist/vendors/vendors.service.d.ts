import { UserEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateVendorDto } from './dtos/createVendor.dto';
import { VendorEntity } from './entities/vendor.entity';
import { IVendor } from './interfaces/vendor.interface';
export declare class VendorsService {
    private vendorRepository;
    private userRepository;
    constructor(vendorRepository: Repository<VendorEntity>, userRepository: Repository<UserEntity>);
    create(createVendorDto: CreateVendorDto): Promise<IVendor>;
    findOne(id: any): Promise<IVendor>;
    findOneFromOwner(_userId: string, vendorSlug: string): Promise<IVendor>;
    getWhereOwner(_id: string): Promise<IVendor[]>;
}
