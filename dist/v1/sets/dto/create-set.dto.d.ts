import { SeriesEntity } from 'src/v1/series/entities/series.entity';
export declare class CreateSetDto {
    name: string;
    slug: string;
    logo: string;
    symbol: string;
    printedQuantity: number;
    totalQuantity: number;
    releaseDate: Date;
    series: SeriesEntity;
}
