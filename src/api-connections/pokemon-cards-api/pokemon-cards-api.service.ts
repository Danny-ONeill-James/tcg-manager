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

  async updateSeriesAndSets(gameSlug: string) {
    const config = {
      headers: {
        'X-Api-Key': process.env.POKEMON_TCG_IO_KEY,
      },
    };
    const url = `https://api.pokemontcg.io/v2/sets`;

    const returnedData = await this.sendAxiosCall(url, config);

    const game: IGame = await this.gameService.findOneBySlug(gameSlug);

    let seriesList: ISeries[] = [] as ISeries[];
    seriesList = await this.seriesService.findAll();

    let setsList: ISet[] = [] as ISet[];
    setsList = await this.setService.findAll();

    returnedData.data.forEach(async (item) => {
      //Check Series
      seriesList = await this.CheckAndUpdateSeries(item, seriesList, game);

      //Check Set
      console.log('Created: ' + item.id);

      setsList = await this.CheckAndUpdateSet(item, setsList);
    });
    return null;
  }

  async CheckAndUpdateSet(item, setList: ISet[]) {
    console.log('Set: ' + setList);
    if (setList.find(({ name }) => name === item.set.name)) {
      console.log(item.set.name + ' found.');
    } else {
      console.log('Did not find: ' + item.id);
      const seriesForSet: ISeries = await this.seriesService.findOneBySlug(
        item.series.replace(/[^a-zA-Z0-9 ]/g, ''),
      );

      const newSet: CreateSetDto = {
        name: item.name,
        slug: item.id,
        logo: item.images.logo,
        symbol: item.images.symbol,
        printedQuantity: item.printedTotal,
        totalQuantity: item.total,
        releaseDate: item.releaseDate,
        series: seriesForSet as SeriesEntity,
      };
      setList.push({
        id: '',
        name: newSet.name,
        slug: newSet.slug,
        symbol: newSet.symbol,
        logo: newSet.logo,
        totalQuantity: newSet.totalQuantity,
        printedQuantity: newSet.printedQuantity,
        series: seriesForSet as SeriesEntity,
      });
      this.setService.create(newSet);
      console.log('Created: ' + item.id);
    }
    return setList;
  }

  async CheckAndUpdateSeries(item, seriesList: ISeries[], game) {
    if (seriesList.find(({ name }) => name === item.series)) {
      console.log(item.series + ' found.');
    } else {
      const newSeries: CreateSeriesDto = {
        name: item.series,
        slug: item.series.replace(/[^a-zA-Z0-9 ]/g, ''),
        image: item.images.logo,
        game: game as GameEntity,
      };
      seriesList.push({
        id: '',
        name: newSeries.name,
        slug: newSeries.slug,
        image: newSeries.image,
        game: game as GameEntity,
      });
      this.seriesService.create(newSeries);

      console.log(item.series + ' Not found.');
    }
    return seriesList;
  }

  async updateCardsInSet(setSlug: string) {
    const config = {
      headers: {
        'X-Api-Key': process.env.POKEMON_TCG_IO_KEY,
      },
    };
    let page = 1;
    const url = `https://api.pokemontcg.io/v2/cards?q=set.id:${setSlug}&page=${page}`;

    let returnedData = await this.sendAxiosCall(url, config);

    const inputSet = await this.setService.findOneBySlug(setSlug);

    this.CheckCards(returnedData, inputSet);

    // if (returnedData.count < returnedData.totalCount) {
    //   console.log('There are more pages');
    //   page++;
    //   const url = `https://api.pokemontcg.io/v2/cards?q=set.id:${setSlug}&page=${page}`;

    //   returnedData = await this.sendAxiosCall(url, config);
    //   this.CheckCards(returnedData, inputSet);
    // }

    return returnedData;
  }

  async CheckCards(returnedData, inputSet) {
    returnedData.data.forEach(async (card) => {
      if (await this.cardsService.findOneBySlug(card.id)) {
        console.log('Found: ' + card.name + '//TODO: Update');
      } else {
        console.log('Did not find: ' + card.name);
        const newCard: CreateCardDto = {
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
