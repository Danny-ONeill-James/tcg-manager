import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CardsService } from 'src/v1/cards/cards.service';
import { GameEntity } from 'src/v1/games/entities/game.entity';
import { GamesService } from 'src/v1/games/games.service';
import { IGame } from 'src/v1/games/interface/games.interface';
import { CreateSeriesDto } from 'src/v1/series/dto/create-series.dto';
import { SeriesEntity } from 'src/v1/series/entities/series.entity';
import { ISeries } from 'src/v1/series/interface/series.interface';
import { SeriesService } from 'src/v1/series/series.service';
import { CreateSetDto } from 'src/v1/sets/dto/create-set.dto';
import { ISet } from 'src/v1/sets/interface/sets.interface';
import { SetsService } from 'src/v1/sets/sets.service';
import { isSet } from 'util/types';

@Injectable()
export class MagicTheGatheringApiService {
  constructor(
    private cardsService: CardsService,
    private gameService: GamesService,
    private setService: SetsService,
    private seriesService: SeriesService,
  ) {}

  async updateMTGSeriesAndSets(gameSlug: string) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const url = `https://api.magicthegathering.io/v1/sets`;

    const returnedData = await this.sendAxiosCall(url, config);

    let formattedSetData: ISet[] = [] as ISet[];
    let gameMtg: IGame = await this.gameService.findOneBySlug(gameSlug);
    let seriesList: ISeries[] = [] as ISeries[];
    seriesList = await this.seriesService.findAll();

    console.log('Before');
    returnedData.sets.forEach(async (item) => {
      if (seriesList.find(({ name }) => name === item.series)) {
        console.log(item.block + ' found.');
      } else {
        console.log(item.block + ' Not found.');
        if (item.block != null) {
          console.log('Inside block');
          let newSeries: CreateSeriesDto = {
            name: item.block,
            slug: item.block.replace(/[^a-zA-Z0-9 ]/g, ''),
            image:
              'https://res.cloudinary.com/deftmtx9e/image/upload/v1678273349/More%20From%20Games/placeholder_wxmc94.png',
            game: gameMtg as GameEntity,
          };
          seriesList.push({
            id: '',
            name: newSeries.name,
            slug: newSeries.slug,
            image: newSeries.image,
            game: gameMtg as GameEntity,
          });
          this.seriesService.create(newSeries);
        }
      }

      if (await this.setService.findOne(item.id)) {
        console.log('Found: ' + item.id);
      } else {
        console.log('Did not find: ' + item.id);
        const seriesForSet: ISeries = await this.seriesService.findOneBySlug(
          item.series.replace(/[^a-zA-Z0-9 ]/g, ''),
        );
        let newSet: CreateSetDto = {
          name: item.name,
          slug: item.id,
          logo: item.images.logo,
          symbol: item.images.symbol,
          printedQuantity: item.printedTotal,
          totalQuantity: item.total,
          releaseDate: item.releaseDate,
          series: seriesForSet as SeriesEntity,
        };
        this.setService.create(newSet);
        console.log('Created: ' + item.id);
      }

      formattedSetData.push({
        name: item.name,
        slug: item.id,
        logo: item.images.logo,
        symbol: item.images.symbol,
        printedQuantity: item.printedTotal,
        totalQuantity: item.total,
        releaseDate: item.releaseDate,
      } as unknown as ISet);
    });
    console.log('After');
  }

  async sendAxiosCall(_url, _config) {
    return await axios
      .get(_url)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  }
}
