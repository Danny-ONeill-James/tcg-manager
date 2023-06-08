import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): Promise<import("../users/interfaces/user.interface").IUser>;
    getProfile(req: any): any;
}
