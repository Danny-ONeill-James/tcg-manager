import { CardEntity } from 'src/v1/cards/entities/card.entity';
import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Stock' })
export class StockEntity extends ParanoidEntity {
  @PrimaryColumn('uuid')
  id: string;

  @OneToOne(() => CardEntity, (cardEntity) => cardEntity.stock)
  card: CardEntity;

  @Column()
  quantity: number;
}
