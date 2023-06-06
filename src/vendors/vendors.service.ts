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
    createVendorDto.slug = createVendorDto.name.replace(/[^0-9a-z]/gi, '');

    const user: IUser = await this.userRepository.findOne({
      where: { id: createVendorDto.user },
    });

    const newVendor: VendorEntity = this.vendorRepository.create({
      ...createVendorDto,
      user,
    });
    return this.vendorRepository.save(newVendor);
  }

  async findOne(id): Promise<IVendor> {
    return this.vendorRepository.findOne({ where: { id } });
  }

  async findOneFromOwner(
    _userId: string,
    vendorSlug: string,
  ): Promise<IVendor> {
    const user = await this.userRepository.findOne({
      where: { id: _userId },
      relations: { vendorOwner: { stock: true } },
    });

    const returnedVendor = user.vendorOwner.find(
      (vendor) => vendor.slug === vendorSlug,
    );

    const vendor = await this.vendorRepository.findOne({
      where: { user: { id: _userId } },
    });

    console.log('Found Vendor: ', vendor);

    return returnedVendor;
  }

  async getWhereOwner(_id: string): Promise<IVendor[]> {
    console.log('Id in Service: ', _id);

    const user = await this.userRepository.findOne({
      where: { id: _id },
      relations: { vendorOwner: true },
    });

    // console.log('User: ', user);

    // TODO: get the vendors from owner

    return (await user.vendorOwner) as unknown as IVendor[];
  }
}
