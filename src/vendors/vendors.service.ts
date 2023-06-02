import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { IUser } from 'src/users/interfaces/user.interface';
import { Repository } from 'typeorm';
import { CreateVendorDto } from './dtos/createVendor.dto';
import { VendorEntity } from './entities/vendor.entity';
import { IVendor } from './interfaces/vendor.interface';

@Injectable()
export class VendorsService {
  constructor(
    @InjectRepository(VendorEntity)
    private vendorRepository: Repository<VendorEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(createVendorDto: CreateVendorDto): Promise<IVendor> {
    const user: IUser = await this.userRepository.findOne({
      where: { id: createVendorDto.user },
    });

    const newVendor: VendorEntity = this.vendorRepository.create({
      ...createVendorDto,
      user,
    });
    return this.vendorRepository.save(newVendor);
  }

  async findOne(username: string): Promise<IUser> {
    return this.userRepository.findOne({ where: { username } });
  }

  async getWhereOwner(_id: string): Promise<IVendor[]> {
    console.log('Id in Service: ', _id);

    const user = await this.userRepository.findOne({
      where: { id: _id },
      relations: { vendorOwner: true },
    });

    console.log('User: ', user);

    // TODO: get the vendors from owner
    //return null;
    return (await user.vendorOwner) as unknown as IVendor[];
  }
}
