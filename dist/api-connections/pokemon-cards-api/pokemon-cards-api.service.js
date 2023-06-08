"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonCardsApiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const cards_service_1 = require("../../v1/cards/cards.service");
const games_service_1 = require("../../v1/games/games.service");
const series_service_1 = require("../../v1/series/series.service");
const sets_service_1 = require("../../v1/sets/sets.service");
let PokemonCardsApiService = class PokemonCardsApiService {
    constructor(cardsService, gameService, setService, seriesService) {
        this.cardsService = cardsService;
        this.gameService = gameService;
        this.setService = setService;
        this.seriesService = seriesService;
    }
    async updateSeriesAndSets(gameSlug) {
        const config = {
            headers: {
                'X-Api-Key': process.env.POKEMON_TCG_IO_KEY,
            },
        };
        const url = `https://api.pokemontcg.io/v2/sets`;
        const returnedData = await this.sendAxiosCall(url, config);
        const game = await this.gameService.findOneBySlug(gameSlug);
        let seriesList = [];
        seriesList = await this.seriesService.findAll();
        let setsList = [];
        setsList = await this.setService.findAll();
        returnedData.data.forEach(async (item) => {
            seriesList = await this.CheckAndUpdateSeries(item, seriesList, game);
            console.log('Created: ' + item.id);
            setsList = await this.CheckAndUpdateSet(item, setsList);
        });
        return null;
    }
    async CheckAndUpdateSet(item, setList) {
        console.log('Set: ' + setList);
        if (setList.find(({ name }) => name === item.set.name)) {
            console.log(item.set.name + ' found.');
        }
        else {
            console.log('Did not find: ' + item.id);
            const seriesForSet = await this.seriesService.findOneBySlug(item.series.replace(/[^a-zA-Z0-9 ]/g, ''));
            const newSet = {
                name: item.name,
                slug: item.id,
                logo: item.images.logo,
                symbol: item.images.symbol,
                printedQuantity: item.printedTotal,
                totalQuantity: item.total,
                releaseDate: item.releaseDate,
                series: seriesForSet,
            };
            setList.push({
                id: '',
                name: newSet.name,
                slug: newSet.slug,
                symbol: newSet.symbol,
                logo: newSet.logo,
                totalQuantity: newSet.totalQuantity,
                printedQuantity: newSet.printedQuantity,
                series: seriesForSet,
            });
            this.setService.create(newSet);
            console.log('Created: ' + item.id);
        }
        return setList;
    }
    async CheckAndUpdateSeries(item, seriesList, game) {
        if (seriesList.find(({ name }) => name === item.series)) {
            console.log(item.series + ' found.');
        }
        else {
            const newSeries = {
                name: item.series,
                slug: item.series.replace(/[^a-zA-Z0-9 ]/g, ''),
                image: item.images.logo,
                game: game,
            };
            seriesList.push({
                id: '',
                name: newSeries.name,
                slug: newSeries.slug,
                image: newSeries.image,
                game: game,
            });
            this.seriesService.create(newSeries);
            console.log(item.series + ' Not found.');
        }
        return seriesList;
    }
    async updateCardsInSet(setSlug) {
        const config = {
            headers: {
                'X-Api-Key': process.env.POKEMON_TCG_IO_KEY,
            },
        };
        const page = 1;
        const url = `https://api.pokemontcg.io/v2/cards?q=set.id:${setSlug}&page=${page}`;
        const returnedData = await this.sendAxiosCall(url, config);
        const inputSet = await this.setService.findOneBySlug(setSlug);
        this.CheckCards(returnedData, inputSet);
        return returnedData;
    }
    async CheckCards(returnedData, inputSet) {
        returnedData.data.forEach(async (card) => {
            if (await this.cardsService.findOneBySlug(card.id)) {
                console.log('Found: ' + card.name + '//TODO: Update');
            }
            else {
                console.log('Did not find: ' + card.name);
                const newCard = {
                    name: card.name,
                    slug: card.id,
                    image: card.images.large,
                    cardNumber: card.number,
                    set: inputSet,
                };
                this.cardsService.create(newCard);
                console.log('Created: ' + card.name);
            }
        });
    }
    async sendAxiosCall(_url, _config) {
        return await axios_1.default
            .get(_url, _config)
            .then((res) => {
            return res.data;
        })
            .catch((err) => console.log(err));
    }
};
PokemonCardsApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cards_service_1.CardsService,
        games_service_1.GamesService,
        sets_service_1.SetsService,
        series_service_1.SeriesService])
], PokemonCardsApiService);
exports.PokemonCardsApiService = PokemonCardsApiService;
//# sourceMappingURL=pokemon-cards-api.service.js.map