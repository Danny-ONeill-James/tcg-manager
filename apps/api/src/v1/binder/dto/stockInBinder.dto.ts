import { BinderEntity } from '../entities/binder.entity';

export class CreateStockInBinderDto {
  name: string;
  slug: string;
  image: string;
  binder: BinderEntity;
}
