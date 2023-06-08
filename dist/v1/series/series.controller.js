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
exports.SeriesController = void 0;
const common_1 = require("@nestjs/common");
const create_series_dto_1 = require("./dto/create-series.dto");
const series_service_1 = require("./series.service");
const auth_guard_1 = require("../../auth/auth.guard");
let SeriesController = class SeriesController {
    constructor(seriesService) {
        this.seriesService = seriesService;
    }
    findAll() {
        return this.seriesService.findAll();
    }
    findOne(id) {
        return this.seriesService.findOne(id);
    }
    findAllSeriesInGame(slug) {
        console.log('Game input: ', slug);
        return this.seriesService.findAllSeriesInGame(slug);
    }
    findOneBySlug(slug) {
        return this.seriesService.findOneBySlug(slug);
    }
    create(createGameDto) {
        return this.seriesService.create(createGameDto);
    }
    async deleteAll() {
        const allSeries = await this.seriesService.findAll();
        allSeries.forEach((element) => {
            return this.seriesService.remove(element.id);
        });
    }
    delete(id) {
        return this.seriesService.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('findOne'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('findSeriesInGame/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "findAllSeriesInGame", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('findOneBySlug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "findOneBySlug", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_series_dto_1.CreateSeriesDto]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "deleteAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeriesController.prototype, "delete", null);
SeriesController = __decorate([
    (0, common_1.Controller)('series'),
    __metadata("design:paramtypes", [series_service_1.SeriesService])
], SeriesController);
exports.SeriesController = SeriesController;
//# sourceMappingURL=series.controller.js.map