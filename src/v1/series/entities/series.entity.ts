import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { GameEntity } from 'src/v1/games/entities/game.entity';
import { SetEntity } from 'src/v1/sets/entities/set.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Series' })
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

  @OneToMany(() => SetEntity, (setEntity) => setEntity.series)
  set: SetEntity[];
}
