import { CardEntity } from 'src/v1/cards/entities/card.entity';
import { ECondition } from 'src/v1/cards/enums/quality.enum';
import { IVendor } from 'src/vendors/interfaces/vendor.interface';

export interface IStock {
  id: string;
  card: CardEntity;
  quantity: number;
  vendor?: IVendor;
  condition: ECondition;
  createdAt?: Date;
  updatedAt?: Date;
}
