import { ECondition } from 'src/v1/cards/enums/quality.enum';

export class InputStockDto {
  cardId: string;
  quantity: number;
  condition: ECondition;
}
