import { CreateUserDto } from './dtos/createUser.dto';
import { IUser } from './interfaces/user.interface';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { VendorsService } from 'src/vendors/vendors.service';
export type User = any;
export declare class UsersService {
    private userRepository;
    private vendorService;
    constructor(userRepository: Repository<UserEntity>, vendorService: VendorsService);
    findOne(username: string): Promise<IUser>;
    create(newUserDto: CreateUserDto): Promise<IUser>;
}
