import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/users/interfaces/user.interface';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(username: string, pass: string): Promise<IUser>;
}
