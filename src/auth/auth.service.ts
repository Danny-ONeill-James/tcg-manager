import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/users/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<IUser> {
    const user = await this.usersService.findOne(username);
    const dbUser = await this.usersService.findOne(username);
    if (dbUser?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };
    user.accessToken = await this.jwtService.signAsync(payload);
    console.log('Token: ', user.accessToken);
    user.name = user.username;

    // TODO: Generate a JWT and return it here
    // instead of the user object

    return user;
    //return result;
  }
}
