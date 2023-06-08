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
exports.StockController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../auth/auth.guard");
const stock_service_1 = require("./stock.service");
let StockController = class StockController {
    constructor(stockService) {
        this.stockService = stockService;
    }
    findAll() {
        return this.stockService.findAll();
    }
    getCardListForUser(userId) {
        console.log('Here');
        return this.stockService.getCardListForUser(userId);
    }
    getCardListForUserSearch(userId, term) {
        console.log('Here');
        return this.stockService.getCardListForUserSearch(userId, term);
    }
    create(userId, cardSlug, createStockDto) {
        return this.stockService.updateStockFromCard(userId, cardSlug, createStockDto);
    }
    findOneCardFromUser(userId, cardSlug) {
        return this.stockService.findStockFromCard(userId, cardSlug);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('getCardListForUser/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getCardListForUser", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('getCardListForUser/:userId/:term'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getCardListForUserSearch", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('update/:userId/:cardSlug'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('cardSlug')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Array]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':userId/:cardSlug'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('cardSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "findOneCardFromUser", null);
StockController = __decorate([
    (0, common_1.Controller)('stock'),
    __metadata("design:paramtypes", [stock_service_1.StockService])
], StockController);
exports.StockController = StockController;
//# sourceMappingURL=stock.controller.js.map