import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { SeriesEntity } from 'src/v1/series/entities/series.entity';
export declare class GameEntity extends ParanoidEntity {
    id: string;
    name: string;
    description: string;
    slug: string;
    image: string;
    series: SeriesEntity[];
}
