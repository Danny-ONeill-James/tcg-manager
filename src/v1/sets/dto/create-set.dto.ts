import { SeriesEntity } from 'src/v1/series/entities/series.entity';

export class CreateSetDto {
  name: string;
  slug: string;
  image: string;
  series: SeriesEntity;
}
