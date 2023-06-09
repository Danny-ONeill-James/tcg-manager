import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { IUser } from './interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { VendorsService } from 'src/vendors/vendors.service';
import { CreateVendorDto } from 'src/vendors/dtos/createVendor.dto';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private vendorService: VendorsService,
  ) {}

  async findOne(username: string): Promise<IUser> {
    return this.userRepository.findOne({ where: { username } });
  }

  async create(newUserDto: CreateUserDto): Promise<IUser> {
    const newUser = this.userRepository.create({
      ...newUserDto,
    });

    const newUserInserted = await this.userRepository.save(newUser);

    const newPersonalVendor: CreateVendorDto = {
      name: 'Personal Collection',
      slug: 'PersonalCollection',
      user: newUserInserted.id,
    };

    console.log('New Personal Vendor: ', newPersonalVendor);
    await this.vendorService.create(newPersonalVendor);

    console.log('New User: ', await newUserInserted);

    return newUserInserted;
  }
}
