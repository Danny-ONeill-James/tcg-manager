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
exports.StockEntity = void 0;
const stockInBinder_entity_1 = require("../../binder/entities/stockInBinder.entity");
const card_entity_1 = require("../../cards/entities/card.entity");
const quality_enum_1 = require("../../cards/enums/quality.enum");
const vendor_entity_1 = require("../../../vendors/entities/vendor.entity");
const typeorm_1 = require("typeorm");
let StockEntity = class StockEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StockEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => card_entity_1.CardEntity, (cardEntity) => cardEntity.stock),
    __metadata("design:type", card_entity_1.CardEntity)
], StockEntity.prototype, "card", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vendor_entity_1.VendorEntity, (vendorEntity) => vendorEntity.stock),
    __metadata("design:type", vendor_entity_1.VendorEntity)
], StockEntity.prototype, "vendor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => stockInBinder_entity_1.StockInBinderEntity, (stockInBinderEntity) => stockInBinderEntity.stock),
    __metadata("design:type", Array)
], StockEntity.prototype, "binder", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], StockEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], StockEntity.prototype, "condition", void 0);
StockEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Stock' })
], StockEntity);
exports.StockEntity = StockEntity;
//# sourceMappingURL=stock.entity.js.map