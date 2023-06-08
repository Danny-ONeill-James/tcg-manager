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
exports.SetsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const set_entity_1 = require("./entities/set.entity");
const series_service_1 = require("../series/series.service");
let SetsService = class SetsService {
    constructor(setsRepository, seriesService) {
        this.setsRepository = setsRepository;
        this.seriesService = seriesService;
    }
    async findAll() {
        return this.setsRepository.find({ relations: { series: { game: true } } });
    }
    async findOne(_id) {
        return this.setsRepository.findOne({
            where: { id: _id },
            relations: { series: { game: true } },
        });
    }
    findOneBySlug(_slug) {
        return this.setsRepository.findOne({
            where: { slug: _slug },
            relations: { series: { game: true } },
        });
    }
    async findSetsInSeries(_slug) {
        const series = await this.seriesService.findOneBySlug(_slug);
        console.log('Returned Game Object: ', series);
        const set = await series.set;
        console.log('Series: ', series);
        return set;
    }
    async create(createSetDto) {
        const newSet = this.setsRepository.create(Object.assign({}, createSetDto));
        return this.setsRepository.save(newSet);
    }
    async remove(id) {
        return this.setsRepository.delete(id);
    }
};
SetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(set_entity_1.SetEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        series_service_1.SeriesService])
], SetsService);
exports.SetsService = SetsService;
//# sourceMappingURL=sets.service.js.map