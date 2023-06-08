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
exports.StockInBinderEntity = void 0;
const stock_entity_1 = require("../../stock/entities/stock.entity");
const typeorm_1 = require("typeorm");
const binder_entity_1 = require("./binder.entity");
let StockInBinderEntity = class StockInBinderEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StockInBinderEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StockInBinderEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StockInBinderEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StockInBinderEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => stock_entity_1.StockEntity, (stockEntity) => stockEntity.binder),
    __metadata("design:type", stock_entity_1.StockEntity)
], StockInBinderEntity.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => binder_entity_1.BinderEntity, (binderEntity) => binderEntity.stockInBinder),
    __metadata("design:type", binder_entity_1.BinderEntity)
], StockInBinderEntity.prototype, "binder", void 0);
StockInBinderEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'StockInBinder' })
], StockInBinderEntity);
exports.StockInBinderEntity = StockInBinderEntity;
//# sourceMappingURL=stockInBinder.entity.js.map