import { SetEntity } from 'src/v1/sets/entities/set.entity';

export class CreateCardDto {
  name: string;
  slug: string;
  image: string;
  cardNumber: string;
  set: SetEntity;
}
