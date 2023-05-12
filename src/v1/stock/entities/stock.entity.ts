import { CardEntity } from 'src/v1/cards/entities/card.entity';
import { ECondition } from 'src/v1/cards/enums/quality.enum';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Stock' })
export class StockEntity {
  @PrimaryColumn('uuid')
  id: string;

  @OneToOne(() => CardEntity, (cardEntity) => cardEntity.stock)
  card: CardEntity;

  @Column()
  quantity: number;

  @Column()
  condition: ECondition;
}
