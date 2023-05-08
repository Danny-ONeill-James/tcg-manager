import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CardsService } from 'src/v1/cards/cards.service';
import { CreateCardDto } from 'src/v1/cards/dto/create-card.dto';
import { GameEntity } from 'src/v1/games/entities/game.entity';
import { GamesService } from 'src/v1/games/games.service';
import { IGame } from 'src/v1/games/interface/games.interface';
import { CreateSeriesDto } from 'src/v1/series/dto/create-series.dto';
import { SeriesEntity } from 'src/v1/series/entities/series.entity';
import { ISeries } from 'src/v1/series/interface/series.interface';
import { SeriesService } from 'src/v1/series/series.service';
import { CreateSetDto } from 'src/v1/sets/dto/create-set.dto';
import { SetEntity } from 'src/v1/sets/entities/set.entity';
import { ISet } from 'src/v1/sets/interface/sets.interface';
import { SetsService } from 'src/v1/sets/sets.service';

@Injectable()
export class PokemonCardsApiService {
  constructor(
    private cardsService: CardsService,
    private gameService: GamesService,
    private setService: SetsService,
    private seriesService: SeriesService,
  ) {}

  async updateSeriesAndSets() {
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
      //Check Series
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

      //Check Set

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
    return formattedSetData;
  }

  async updateCardsInSet(setId: string) {
    const config = {
      headers: {
        'X-Api-Key': process.env.POKEMON_TCG_IO_KEY,
      },
    };
    const url = `https://api.pokemontcg.io/v2/cards?q=set.id:${setId}`;

    const returnedData = await this.sendAxiosCall(url, config);

    const inputSet = await this.setService.findOne(setId);

    //Check if card exsists in this set
    returnedData.data.forEach(async (card) => {
      if (await this.cardsService.findOneBySlug(card.id)) {
        console.log('Found: ' + card.name + '//TODO: Update');
      } else {
        console.log('Did not find: ' + card.name);
        let newCard: CreateCardDto = {
          name: card.name,
          slug: card.id,
          image: card.images.large,
          cardNumber: card.number,
          set: inputSet as SetEntity,
        };
        this.cardsService.create(newCard);
        console.log('Created: ' + card.name);
      }
    });

    return returnedData;
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
