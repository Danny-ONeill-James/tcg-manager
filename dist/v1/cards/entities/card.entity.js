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
exports.CardEntity = void 0;
const saleItem_entity_1 = require("../../sales/entities/saleItem.entity");
const set_entity_1 = require("../../sets/entities/set.entity");
const stock_entity_1 = require("../../stock/entities/stock.entity");
const typeorm_1 = require("typeorm");
let CardEntity = class CardEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CardEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CardEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CardEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CardEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CardEntity.prototype, "cardNumber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => set_entity_1.SetEntity, (setEntity) => setEntity.card),
    __metadata("design:type", set_entity_1.SetEntity)
], CardEntity.prototype, "set", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => stock_entity_1.StockEntity, (stockEntity) => stockEntity.card),
    __metadata("design:type", Array)
], CardEntity.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => saleItem_entity_1.SaleItemEntity, (saleItemEntity) => saleItemEntity.card),
    __metadata("design:type", Array)
], CardEntity.prototype, "saleItem", void 0);
CardEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Card' })
], CardEntity);
exports.CardEntity = CardEntity;
//# sourceMappingURL=card.entity.js.map