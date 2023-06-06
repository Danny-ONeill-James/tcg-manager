import { Injectable } from '@nestjs/common';
import { IBinder } from './interface/binder.interface';
import { InputBinderDto } from './dto/binder.dto';

@Injectable()
export class BinderService {
  getAllBindersForUser(userId: string, binderSlug: string): Promise<IBinder[]> {
    throw new Error('Method not implemented.');
  }
  createBinder(
    userId: string,
    createBinderDto: InputBinderDto[],
  ): Promise<IBinder> {
    throw new Error('Method not implemented.');
  }
}
