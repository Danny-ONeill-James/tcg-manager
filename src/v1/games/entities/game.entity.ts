import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'game_entity' })
export class GameEntity extends ParanoidEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  image: string;
}
