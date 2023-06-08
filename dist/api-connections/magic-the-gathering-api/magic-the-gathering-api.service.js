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
exports.MagicTheGatheringApiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const games_service_1 = require("../../v1/games/games.service");
const series_service_1 = require("../../v1/series/series.service");
const sets_service_1 = require("../../v1/sets/sets.service");
let MagicTheGatheringApiService = class MagicTheGatheringApiService {
    constructor(gameService, setService, seriesService) {
        this.gameService = gameService;
        this.setService = setService;
        this.seriesService = seriesService;
    }
    async updateMTGSeriesAndSets(gameSlug) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const url = `https://api.magicthegathering.io/v1/sets`;
        const returnedData = await this.sendAxiosCall(url, config);
        const formattedSetData = [];
        const gameMtg = await this.gameService.findOneBySlug(gameSlug);
        let seriesList = [];
        seriesList = await this.seriesService.findAll();
        console.log('Before');
        returnedData.sets.forEach(async (item) => {
            if (seriesList.find(({ name }) => name === item.series)) {
                console.log(item.block + ' found.');
            }
            else {
                console.log(item.block + ' Not found.');
                if (item.block != null) {
                    console.log('Inside block');
                    const newSeries = {
                        name: item.block,
                        slug: item.block.replace(/[^a-zA-Z0-9 ]/g, ''),
                        image: 'https://res.cloudinary.com/deftmtx9e/image/upload/v1678273349/More%20From%20Games/placeholder_wxmc94.png',
                        game: gameMtg,
                    };
                    seriesList.push({
                        id: '',
                        name: newSeries.name,
                        slug: newSeries.slug,
                        image: newSeries.image,
                        game: gameMtg,
                    });
                    this.seriesService.create(newSeries);
                }
            }
            if (await this.setService.findOne(item.id)) {
                console.log('Found: ' + item.id);
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
            });
        });
        console.log('After');
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
MagicTheGatheringApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [games_service_1.GamesService,
        sets_service_1.SetsService,
        series_service_1.SeriesService])
], MagicTheGatheringApiService);
exports.MagicTheGatheringApiService = MagicTheGatheringApiService;
//# sourceMappingURL=magic-the-gathering-api.service.js.map