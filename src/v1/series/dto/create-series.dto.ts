import { GameEntity } from 'src/v1/games/entities/game.entity';

export class CreateSeriesDto {
  name: string;
  slug: string;
  image: string;
  game: GameEntity;
}
