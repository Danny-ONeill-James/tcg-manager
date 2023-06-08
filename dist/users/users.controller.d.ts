import { IUser } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/createUser.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    create(createUserDto: CreateUserDto): Promise<IUser>;
}
