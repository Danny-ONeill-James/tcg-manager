import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { SeriesEntity } from 'src/v1/series/entities/series.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Game' })
export class GameEntity extends ParanoidEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  slug: string;

  @Column()
  image: string;

  @OneToMany(() => SeriesEntity, (seriesEntity) => seriesEntity.game)
  series: SeriesEntity;
}
