import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { GameEntity } from 'src/v1/games/entities/game.entity';
import { SetEntity } from 'src/v1/sets/entities/set.entity';
export declare class SeriesEntity extends ParanoidEntity {
    id: string;
    name: string;
    slug: string;
    image: string;
    game: GameEntity;
    set: SetEntity[];
}
