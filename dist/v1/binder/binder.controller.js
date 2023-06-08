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
exports.BinderController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../auth/auth.guard");
const binder_service_1 = require("./binder.service");
let BinderController = class BinderController {
    constructor(binderService) {
        this.binderService = binderService;
    }
    create(userId) {
        return this.binderService.createBinder(userId);
    }
    updateStockInBinder(userId, binderSlug, cardSlug, quantity) {
        return this.binderService.updateStockInBinder(userId, binderSlug, cardSlug, quantity);
        console.log('Will Update stock in binder ');
        return null;
    }
    getAllBindersForUser(userId) {
        return this.binderService.getAllBindersForUser(userId);
    }
    getSingleBinder(userId, slug) {
        return this.binderService.getSingleBinder(userId, slug);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BinderController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('updateStockInBinder/:userId/:binderSlug/:cardSlug/:quantity'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('binderSlug')),
    __param(2, (0, common_1.Param)('cardSlug')),
    __param(3, (0, common_1.Param)('quantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", Promise)
], BinderController.prototype, "updateStockInBinder", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BinderController.prototype, "getAllBindersForUser", null);
__decorate([
    (0, common_1.UseGuards)(),
    (0, common_1.Get)('single/:userId/:slug'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BinderController.prototype, "getSingleBinder", null);
BinderController = __decorate([
    (0, common_1.Controller)('binder'),
    __metadata("design:paramtypes", [binder_service_1.BinderService])
], BinderController);
exports.BinderController = BinderController;
//# sourceMappingURL=binder.controller.js.map