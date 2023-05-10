import { CardEntity } from 'src/v1/cards/entities/card.entity';
import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { SeriesEntity } from 'src/v1/series/entities/series.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Set' })
export class SetEntity extends ParanoidEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  image: string;

  @ManyToOne(() => SeriesEntity, (seriesEntity) => seriesEntity.set)
  series: SeriesEntity;

  @OneToMany(() => CardEntity, (cardEntity) => cardEntity.set)
  card: CardEntity;
}
