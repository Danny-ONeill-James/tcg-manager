import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GameEntity } from 'src/v1/games/entities/game.entity';
import { GamesService } from 'src/v1/games/games.service';
import { IGame } from 'src/v1/games/interface/games.interface';
import { CreateSeriesDto } from 'src/v1/series/dto/create-series.dto';
import { ISeries } from 'src/v1/series/interface/series.interface';
import { SeriesService } from 'src/v1/series/series.service';
import { ISet } from 'src/v1/sets/interface/sets.interface';

@Injectable()
export class PokemonCardsApiService {
  constructor(
    private seriesService: SeriesService,
    private gameService: GamesService,
  ) {}

  async getSetsList() {
    const config = {
      headers: {
        'X-Api-Key': process.env.POKEMON_TCG_IO_KEY,
      },
    };
    const url = `https://api.pokemontcg.io/v2/sets`;

    const returnedData = await this.sendAxiosCall(url, config);

    let formattedSetData: ISet[] = [] as ISet[];

    let gamePokemon: IGame = await this.gameService.findOneBySlug('pokemontcg');

    let seriesList: ISeries[] = [] as ISeries[];
    seriesList = await this.seriesService.findAll();

    returnedData.data.forEach(async (item) => {
      if (seriesList.find(({ name }) => name === item.series)) {
        console.log(item.series + ' found.');
      } else {
        let newSeries: CreateSeriesDto = {
          name: item.series,
          slug: item.series.replace(/[^a-zA-Z0-9 ]/g, ''),
          image: item.images.logo,
          game: gamePokemon as GameEntity,
        };
        seriesList.push({
          id: '',
          name: newSeries.name,
          slug: newSeries.slug,
          image: newSeries.image,
          game: gamePokemon as GameEntity,
        });
        this.seriesService.create(newSeries);

        console.log(item.series + ' Not found.');
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
    return formattedSetData;
  }

  async sendAxiosCall(_url, _config) {
    return await axios
      .get(_url, _config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  }
}
