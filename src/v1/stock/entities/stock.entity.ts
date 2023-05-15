import { UserEntity } from 'src/system/users/entities/user.entity';
import { CardEntity } from 'src/v1/cards/entities/card.entity';
import { ECondition } from 'src/v1/cards/enums/quality.enum';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Stock' })
export class StockEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CardEntity, (cardEntity) => cardEntity.stock)
  card: CardEntity;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.sale)
  user: UserEntity;

  @Column()
  quantity: number;

  @Column()
  condition: ECondition;
}
