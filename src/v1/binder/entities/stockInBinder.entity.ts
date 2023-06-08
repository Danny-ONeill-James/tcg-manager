import { StockEntity } from 'src/v1/stock/entities/stock.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BinderEntity } from './binder.entity';

@Entity({ name: 'StockInBinder' })
export class StockInBinderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  image: string;

  @ManyToOne(() => StockEntity, (stockEntity) => stockEntity.binder)
  stock: StockEntity;

  @OneToMany(() => BinderEntity, (binderEntity) => binderEntity.stockInBinder)
  binder: StockEntity;
}
