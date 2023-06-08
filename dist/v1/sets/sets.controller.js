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
exports.SetsController = void 0;
const common_1 = require("@nestjs/common");
const sets_service_1 = require("./sets.service");
const create_set_dto_1 = require("./dto/create-set.dto");
const auth_guard_1 = require("../../auth/auth.guard");
let SetsController = class SetsController {
    constructor(setsService) {
        this.setsService = setsService;
    }
    findAll() {
        return this.setsService.findAll();
    }
    findOne(id) {
        return this.setsService.findOne(id);
    }
    findSetsInSeries(slug) {
        console.log('Series input: ', slug);
        return this.setsService.findSetsInSeries(slug);
    }
    findOneBySlug(slug) {
        return this.setsService.findOneBySlug(slug);
    }
    create(createSetDto) {
        return this.setsService.create(createSetDto);
    }
    delete(id) {
        return this.setsService.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SetsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('findOne'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SetsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('findSetsInSeries/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SetsController.prototype, "findSetsInSeries", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('findOneBySlug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SetsController.prototype, "findOneBySlug", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_set_dto_1.CreateSetDto]),
    __metadata("design:returntype", Promise)
], SetsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SetsController.prototype, "delete", null);
SetsController = __decorate([
    (0, common_1.Controller)('sets'),
    __metadata("design:paramtypes", [sets_service_1.SetsService])
], SetsController);
exports.SetsController = SetsController;
//# sourceMappingURL=sets.controller.js.map