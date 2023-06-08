import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import { Repository } from 'typeorm';
import { BinderEntity } from './entities/binder.entity';
import { StockInBinderEntity } from './entities/stockInBinder.entity';
import { IBinder } from './interface/binder.interface';

@Injectable()
export class BinderService {
  constructor(
    @InjectRepository(BinderEntity)
    private binderRepository: Repository<BinderEntity>,
    @InjectRepository(StockInBinderEntity)
    private stockInBinderRepository: Repository<StockInBinderEntity>,
    @InjectRepository(VendorEntity)
    private vendorRepository: Repository<VendorEntity>,
  ) {}

  async getSingleBinder(userId: string, binderSlug: string): Promise<IBinder> {
    return await this.binderRepository.findOne({
      where: { slug: binderSlug, vendor: { user: { id: userId } } },
      relations: { stockInBinder: true },
    });
  }

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

  async updateStockInBinder(
    userId: string,
    binderSlug: string,
    cardSlug: string,
    quantity: number,
  ): Promise<IBinder> {
    //check if binder stock already exsists
    const binderStockCheck = await this.stockInBinderRepository.find({
      where: {
        stock: { card: { slug: cardSlug } },
        binder: { vendor: { user: { id: userId } } },
      },
    });
    console.log('Binder Check: ', binderStockCheck);

    if (binderStockCheck.length == 0) {
      console.log('Did not find stock');
      //Going to create the Stock In Binder

      const binder: BinderEntity = await this.binderRepository.findOne({
        where: { vendor: { user: { id: userId } }, slug: binderSlug },
      });

      const newBinderStock = this.stockInBinderRepository.create({
        binder,
      });

      console.log('New Binder Stock: ', newBinderStock);
    }

    //return updated binder
    return null;
  }
}
