import { GameEntity } from 'src/v1/games/entities/game.entity';
import { SetEntity } from 'src/v1/sets/entities/set.entity';

export interface ISeries {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  slug: string;
  image: string;
  game: GameEntity;
  set?: SetEntity[];
}
