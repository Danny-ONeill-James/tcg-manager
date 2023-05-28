import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dtos/createVendor.dto';
import { IVendor } from './interfaces/vendor.interface';
import { VendorEntity } from './entities/vendor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { IUser } from 'src/users/interfaces/user.interface';

@Injectable()
export class VendorsService {
  constructor(
    @InjectRepository(VendorEntity)
    private vendorRepository: Repository<VendorEntity>,
    @InjectRepository(UserEntity)
    private userEntity: Repository<UserEntity>,
  ) {}

  async create(createVendorDto: CreateVendorDto): Promise<IVendor> {
    const owner: IUser = await this.userEntity.findOne({
      where: { id: createVendorDto.owner },
    });

    const newVendor: VendorEntity = this.vendorRepository.create({
      ...createVendorDto,
      owner,
    });
    return this.vendorRepository.save(newVendor);
  }
}
