import { CardEntity } from 'src/v1/cards/entities/card.entity';
import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { SeriesEntity } from 'src/v1/series/entities/series.entity';
export declare class SetEntity extends ParanoidEntity {
    id: string;
    name: string;
    slug: string;
    logo: string;
    symbol: string;
    printedQuantity: number;
    totalQuantity: number;
    releaseDate: Date;
    series: SeriesEntity;
    card: CardEntity;
}
