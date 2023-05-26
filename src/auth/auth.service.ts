import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;

    const newResult = {
      name: result.username,
      image: result.image,
    };
    console.log('New Result: ', newResult);
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return newResult;
  }
}
