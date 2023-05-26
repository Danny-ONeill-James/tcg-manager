import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { IUser } from './interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findOne(username: string): Promise<IUser> {
    return this.userRepository.findOne({ where: { username } });
  }

  async create(newUserDto: CreateUserDto): Promise<IUser> {
    const newUser = this.userRepository.create({
      ...newUserDto,
    });

    return this.userRepository.save(newUser);
  }
}
