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
exports.BinderEntity = void 0;
const typeorm_1 = require("typeorm");
const stockInBinder_entity_1 = require("./stockInBinder.entity");
const vendor_entity_1 = require("../../../vendors/entities/vendor.entity");
let BinderEntity = class BinderEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BinderEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BinderEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BinderEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BinderEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vendor_entity_1.VendorEntity, (vendorEntity) => vendorEntity.binder),
    __metadata("design:type", vendor_entity_1.VendorEntity)
], BinderEntity.prototype, "vendor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => stockInBinder_entity_1.StockInBinderEntity, (stockInBinderEntity) => stockInBinderEntity.binder),
    __metadata("design:type", Array)
], BinderEntity.prototype, "stockInBinder", void 0);
BinderEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Binder' })
], BinderEntity);
exports.BinderEntity = BinderEntity;
//# sourceMappingURL=binder.entity.js.map