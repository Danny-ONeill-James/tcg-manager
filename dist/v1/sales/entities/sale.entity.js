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
exports.SaleEntity = void 0;
const user_entity_1 = require("../../../users/entities/user.entity");
const vendor_entity_1 = require("../../../vendors/entities/vendor.entity");
const typeorm_1 = require("typeorm");
const company_enum_1 = require("../enums/company.enum");
const status_enum_1 = require("../enums/status.enum");
const saleItem_entity_1 = require("./saleItem.entity");
const transaction_entity_1 = require("./transaction.entity");
let SaleEntity = class SaleEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SaleEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SaleEntity.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SaleEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], SaleEntity.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vendor_entity_1.VendorEntity, (vendorEntity) => vendorEntity.sale),
    __metadata("design:type", user_entity_1.UserEntity)
], SaleEntity.prototype, "vendor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => saleItem_entity_1.SaleItemEntity, (saleItemEntity) => saleItemEntity.sale),
    __metadata("design:type", Array)
], SaleEntity.prototype, "saleItem", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaction_entity_1.TransactionEntity, (transactionEntity) => transactionEntity.sale),
    __metadata("design:type", Array)
], SaleEntity.prototype, "transaction", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], SaleEntity.prototype, "saleDate", void 0);
SaleEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Sale' })
], SaleEntity);
exports.SaleEntity = SaleEntity;
//# sourceMappingURL=sale.entity.js.map