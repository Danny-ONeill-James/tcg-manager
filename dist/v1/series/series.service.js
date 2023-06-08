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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const game_entity_1 = require("../games/entities/game.entity");
const series_entity_1 = require("./entities/series.entity");
let SeriesService = class SeriesService {
    constructor(seriesRepository, gamesRepository) {
        this.seriesRepository = seriesRepository;
        this.gamesRepository = gamesRepository;
    }
    async findAll() {
        return this.seriesRepository.find({ relations: { game: true } });
    }
    async findOne(_id) {
        return this.seriesRepository.findOne({
            where: { id: _id },
            relations: { game: true },
        });
    }
    findOneBySlug(_slug) {
        return this.seriesRepository.findOne({
            where: { slug: _slug },
            relations: { game: true, set: true },
        });
    }
    async findAllSeriesInGame(_slug) {
        const game = await this.gamesRepository.findOne({
            where: { slug: _slug },
            relations: { series: true },
        });
        console.log('Returned Game Object: ', game);
        const series = await game.series;
        console.log('Series: ', series);
        return series;
    }
    async create(createSeriesDto) {
        const newGame = this.seriesRepository.create(Object.assign({}, createSeriesDto));
        return this.seriesRepository.save(newGame);
    }
    async remove(id) {
        return this.seriesRepository.delete(id);
    }
};
SeriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(series_entity_1.SeriesEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(game_entity_1.GameEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SeriesService);
exports.SeriesService = SeriesService;
//# sourceMappingURL=series.service.js.map