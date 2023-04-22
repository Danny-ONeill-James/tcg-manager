import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { SetEntity } from 'src/v1/sets/entities/set.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'card_entity' })
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
}
