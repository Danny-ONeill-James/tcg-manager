import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { SetEntity } from 'src/v1/sets/entities/set.entity';
import { StockEntity } from 'src/v1/stock/entities/stock.entity';
import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Card' })
export class CardEntity extends ParanoidEntity {
  @PrimaryColumn('uuid')
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

  @OneToOne(() => StockEntity, (stockEntity) => stockEntity.card)
  stock: StockEntity;
}
