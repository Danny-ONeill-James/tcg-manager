import { ISeries } from 'src/v1/series/interface/series.interface';

export interface IGame {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  slug: string;
  image: string;
}
