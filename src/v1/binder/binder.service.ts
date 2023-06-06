import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import { Repository } from 'typeorm';
import { BinderEntity } from './entities/binder.entity';
import { IBinder } from './interface/binder.interface';
import { count } from 'console';

@Injectable()
export class BinderService {
  constructor(
    @InjectRepository(BinderEntity)
    private binderRepository: Repository<BinderEntity>,
    @InjectRepository(VendorEntity)
    private vendorRepository: Repository<VendorEntity>,
  ) {}

  async getAllBindersForUser(userId: string): Promise<IBinder[]> {
    return await this.binderRepository.find({
      where: { vendor: { user: { id: userId } } },
    });
  }

  async createBinder(userId: string): Promise<IBinder> {
    //Get user details
    const vendor: VendorEntity = await this.vendorRepository.findOne({
      where: { user: { id: userId } },
      relations: { user: true, binder: true },
    });

    const name: string = vendor.user.username + ' Binder';
    const image: string =
      'https://res.cloudinary.com/deftmtx9e/image/upload/v1676549773/More%20From%20Games/placeholder_urxkej.png';
    const slug: string = vendor.user.username + (vendor.binder.length + 1);

    const newBinder = this.binderRepository.create({
      name,
      image,
      vendor,
      slug,
    });

    console.log('newBinder: ', newBinder);
    //return null;
    this.binderRepository.save(newBinder);

    return newBinder as unknown as IBinder;
  }
}
