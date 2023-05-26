import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/system/users/entities/user.entity';
import { Repository } from 'typeorm';
import { IUser } from 'src/system/users/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async signIn(username: string, pass: string): Promise<IUser> {
    const user = await this.usersService.findOne(username);
    const dbUser = await this.userRepository.findOne({
      where: { username: username },
    });
    if (dbUser?.password !== pass) {
      throw new UnauthorizedException();
    }

    // TODO: Generate a JWT and return it here
    // instead of the user object
    return dbUser;
  }
}
