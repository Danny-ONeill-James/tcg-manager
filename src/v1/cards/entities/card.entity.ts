import { SetEntity } from 'src/v1/sets/entities/set.entity';
import { StockEntity } from 'src/v1/stock/entities/stock.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Card' })
export class CardEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  image: string;

  @Column()
  cardNumber: string;

  @ManyToOne(() => SetEntity, (setEntity) => setEntity.card)
  set: SetEntity;

  @OneToMany(() => StockEntity, (stockEntity) => stockEntity.card)
  stock: StockEntity[];
}
