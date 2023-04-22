import { SeriesEntity } from 'src/v1/series/entities/series.entity';

export interface ISet {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  slug: string;
  image: string;
  series: SeriesEntity;
}
