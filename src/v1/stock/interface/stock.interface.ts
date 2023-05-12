import { CardEntity } from 'src/v1/cards/entities/card.entity';
import { ECondition } from 'src/v1/cards/enums/quality.enum';

export interface IStock {
  id: string;
  card: CardEntity;
  quantity: number;
  condition: ECondition;
  createdAt?: Date;
  updatedAt?: Date;
}
