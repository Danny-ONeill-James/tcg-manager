import { ECondition } from 'src/v1/cards/enums/quality.enum';

export class InputStockDto {
  cardId: string;
  vendorId: string;
  quantity: number;
  condition: ECondition;
}
