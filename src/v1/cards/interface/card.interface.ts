import { SetEntity } from 'src/v1/sets/entities/set.entity';

export interface ICard {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  slug: string;
  image: string;
  cardNumber: string;
  set: SetEntity;
}
