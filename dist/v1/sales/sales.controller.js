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
exports.SalesController = void 0;
const common_1 = require("@nestjs/common");
const sale_dto_1 = require("./dto/sale.dto");
const saleItem_dto_1 = require("./dto/saleItem.dto");
const sales_service_1 = require("./sales.service");
const auth_guard_1 = require("../../auth/auth.guard");
let SalesController = class SalesController {
    constructor(salesService) {
        this.salesService = salesService;
    }
    findAll() {
        return this.salesService.findAll();
    }
    findOne(id) {
        return this.salesService.findOne(id);
    }
    createSale(createSaleDto) {
        return this.salesService.createSale(createSaleDto);
    }
    editOneSale(id, updatedSaleData) {
        return this.salesService.editOneSale(id, updatedSaleData);
    }
    createSaleItem(createSaleItemDto) {
        return this.salesService.createSaleItem(createSaleItemDto);
    }
    deleteSale(id) {
        return this.salesService.deleteSale(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('findOne/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('sale'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sale_dto_1.CreateSaleDto]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "createSale", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "editOneSale", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('saleItem'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [saleItem_dto_1.CreateSaleItemDto]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "createSaleItem", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SalesController.prototype, "deleteSale", null);
SalesController = __decorate([
    (0, common_1.Controller)('sales'),
    __metadata("design:paramtypes", [sales_service_1.SalesService])
], SalesController);
exports.SalesController = SalesController;
//# sourceMappingURL=sales.controller.js.map