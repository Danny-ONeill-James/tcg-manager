import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { IUser } from './interfaces/user.interface';
import { async } from 'rxjs';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  private readonly users = [
    {
      userId: 1,
      username: 'Danny',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(_username: string): Promise<IUser> {
    return this.userRepository.findOne({
      where: { username: _username },
    });
  }

  async create(newUserDto: CreateUserDto): Promise<IUser> {
    const newUser = this.userRepository.create({
      ...newUserDto,
    });

    return this.userRepository.save(newUser);
  }
}
