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
exports.VendorsController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const createVendor_dto_1 = require("./dtos/createVendor.dto");
const vendors_service_1 = require("./vendors.service");
let VendorsController = class VendorsController {
    constructor(vendorService) {
        this.vendorService = vendorService;
    }
    findOne(vendorId) {
        console.log('Id in controller: ' + vendorId);
        return this.vendorService.findOne(vendorId);
    }
    create(createVendorDto) {
        return this.vendorService.create(createVendorDto);
    }
    getWhereOwner(id) {
        console.log('Id in controller: ' + id);
        return this.vendorService.getWhereOwner(id);
    }
    findOneFromOwner(userId, vendorSlug) {
        console.log('Id in controller: ' + userId);
        return this.vendorService.findOneFromOwner(userId, vendorSlug);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':vendorId'),
    __param(0, (0, common_1.Param)('vendorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VendorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createVendor_dto_1.CreateVendorDto]),
    __metadata("design:returntype", Promise)
], VendorsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('owner/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "getWhereOwner", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':userId/:vendorSlug'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('vendorSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VendorsController.prototype, "findOneFromOwner", null);
VendorsController = __decorate([
    (0, common_1.Controller)('vendors'),
    __metadata("design:paramtypes", [vendors_service_1.VendorsService])
], VendorsController);
exports.VendorsController = VendorsController;
//# sourceMappingURL=vendors.controller.js.map