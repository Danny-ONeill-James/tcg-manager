import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SaleEntity } from './sale.entity';
import { CardEntity } from 'src/v1/cards/entities/card.entity';

@Entity({ name: 'SaleItem' })
export class SaleItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => SaleEntity, (saleEntity) => saleEntity.saleItem)
  sale: SaleEntity;

  @ManyToOne(() => CardEntity, (cardEntity) => cardEntity.saleItem)
  card: CardEntity;

  @Column()
  quantity: number;

  @Column()
  price: number;
}
