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
exports.SaleItemEntity = void 0;
const card_entity_1 = require("../../cards/entities/card.entity");
const typeorm_1 = require("typeorm");
const sale_entity_1 = require("./sale.entity");
let SaleItemEntity = class SaleItemEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SaleItemEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sale_entity_1.SaleEntity, (saleEntity) => saleEntity.saleItem),
    __metadata("design:type", sale_entity_1.SaleEntity)
], SaleItemEntity.prototype, "sale", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => card_entity_1.CardEntity, (cardEntity) => cardEntity.saleItem),
    __metadata("design:type", card_entity_1.CardEntity)
], SaleItemEntity.prototype, "card", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SaleItemEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], SaleItemEntity.prototype, "price", void 0);
SaleItemEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'SaleItem' })
], SaleItemEntity);
exports.SaleItemEntity = SaleItemEntity;
//# sourceMappingURL=saleItem.entity.js.map