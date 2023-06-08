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
exports.VendorEntity = void 0;
const user_entity_1 = require("../../users/entities/user.entity");
const binder_entity_1 = require("../../v1/binder/entities/binder.entity");
const paranoid_entity_1 = require("../../v1/common/entities/paranoid.entity");
const sale_entity_1 = require("../../v1/sales/entities/sale.entity");
const stock_entity_1 = require("../../v1/stock/entities/stock.entity");
const typeorm_1 = require("typeorm");
const vendor_users_entity_1 = require("./vendor.users.entity");
let VendorEntity = class VendorEntity extends paranoid_entity_1.ParanoidEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], VendorEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VendorEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VendorEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (userEntity) => userEntity.vendorOwner),
    __metadata("design:type", user_entity_1.UserEntity)
], VendorEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VendorEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sale_entity_1.SaleEntity, (saleEntity) => saleEntity.vendor),
    __metadata("design:type", Array)
], VendorEntity.prototype, "sale", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => stock_entity_1.StockEntity, (stockEntity) => stockEntity.vendor),
    __metadata("design:type", Array)
], VendorEntity.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => binder_entity_1.BinderEntity, (binderEntity) => binderEntity.vendor),
    __metadata("design:type", Array)
], VendorEntity.prototype, "binder", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vendor_users_entity_1.VendorUsersEntity, (vendorUserEntity) => vendorUserEntity.vendor),
    __metadata("design:type", Array)
], VendorEntity.prototype, "users", void 0);
VendorEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Vendor' })
], VendorEntity);
exports.VendorEntity = VendorEntity;
//# sourceMappingURL=vendor.entity.js.map