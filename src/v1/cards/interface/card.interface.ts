import { SetEntity } from 'src/v1/sets/entities/set.entity';

export interface ICard {
  id: string;
  name: string;
  slug: string;
  image: string;
  set: SetEntity;
  cardNumber: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
