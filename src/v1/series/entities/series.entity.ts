import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { GameEntity } from 'src/v1/games/entities/game.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'series_entity' })
export class SeriesEntity extends ParanoidEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  image: string;

  @ManyToOne(() => GameEntity, (gameEntity) => gameEntity.series)
  game: GameEntity;
}
