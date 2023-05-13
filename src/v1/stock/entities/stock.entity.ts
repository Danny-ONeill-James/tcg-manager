import { CardEntity } from 'src/v1/cards/entities/card.entity';
import { ECondition } from 'src/v1/cards/enums/quality.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Stock' })
export class StockEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => CardEntity, (cardEntity) => cardEntity.stock)
  card: CardEntity;

  @Column()
  quantity: number;

  @Column()
  condition: ECondition;
}
