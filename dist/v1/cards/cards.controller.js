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
exports.CardsController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../auth/auth.guard");
const cards_service_1 = require("./cards.service");
const create_card_dto_1 = require("./dto/create-card.dto");
let CardsController = class CardsController {
    constructor(cardsService) {
        this.cardsService = cardsService;
    }
    findAll() {
        return this.cardsService.findAll();
    }
    findOne(id) {
        return this.cardsService.findOne(id);
    }
    findForActiveSearch(searchTerm) {
        return this.cardsService.findForActiveSearch(searchTerm);
    }
    findOneBySlug(slug) {
        return this.cardsService.findOneBySlug(slug);
    }
    findAllCardsInSet(slug) {
        return this.cardsService.findAllCardsInSet(slug);
    }
    create(createCardDto) {
        return this.cardsService.create(createCardDto);
    }
    update(updateGameDto, inputId) {
        return this.cardsService.update(inputId, updateGameDto);
    }
    delete(id) {
        return this.cardsService.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('findOne'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('activeSearch/:searchTerm'),
    __param(0, (0, common_1.Param)('searchTerm')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "findForActiveSearch", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('findOneBySlug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "findOneBySlug", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('findCardsInSet/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "findAllCardsInSet", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_card_dto_1.CreateCardDto]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_card_dto_1.CreateCardDto, String]),
    __metadata("design:returntype", void 0)
], CardsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CardsController.prototype, "delete", null);
CardsController = __decorate([
    (0, common_1.Controller)('cards'),
    __metadata("design:paramtypes", [cards_service_1.CardsService])
], CardsController);
exports.CardsController = CardsController;
//# sourceMappingURL=cards.controller.js.map