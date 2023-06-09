import { CardEntity } from 'src/v1/cards/entities/card.entity';

export class CreateSaleItemDto {
  id: string;
  card: CardEntity;
  quantity: number;
}
