import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dtos/createVendor.dto';
import { IVendor } from './interfaces/vendor.interface';
import { VendorEntity } from './entities/vendor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { IUser } from 'src/users/interfaces/user.interface';

@Injectable()
export class VendorsService {
  constructor(
    @InjectRepository(VendorEntity)
    private vendorRepository: Repository<VendorEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(createVendorDto: CreateVendorDto): Promise<IVendor> {
    const owner: IUser = await this.userRepository.findOne({
      where: { id: createVendorDto.owner },
    });

    const newVendor: VendorEntity = this.vendorRepository.create({
      ...createVendorDto,
      owner,
    });
    return this.vendorRepository.save(newVendor);
  }

  async getWhereOwner(id: string): Promise<IVendor[]> {
    const user: UserEntity = await this.userRepository.findOne({
      where: { id: id },
      relations: { vendorOwner: true },
    });

    const vendors: IVendor[] = await this.vendorRepository.find({
      where: { owner: user },
      relations: { owner: true },
    });

    // TODO: get the vendors from owner

    return (await vendors) as unknown as IVendor[];
  }
}
