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
exports.SetEntity = void 0;
const card_entity_1 = require("../../cards/entities/card.entity");
const paranoid_entity_1 = require("../../common/entities/paranoid.entity");
const series_entity_1 = require("../../series/entities/series.entity");
const typeorm_1 = require("typeorm");
let SetEntity = class SetEntity extends paranoid_entity_1.ParanoidEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], SetEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SetEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SetEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SetEntity.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SetEntity.prototype, "symbol", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SetEntity.prototype, "printedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SetEntity.prototype, "totalQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], SetEntity.prototype, "releaseDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => series_entity_1.SeriesEntity, (seriesEntity) => seriesEntity.set),
    __metadata("design:type", series_entity_1.SeriesEntity)
], SetEntity.prototype, "series", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => card_entity_1.CardEntity, (cardEntity) => cardEntity.set),
    __metadata("design:type", card_entity_1.CardEntity)
], SetEntity.prototype, "card", void 0);
SetEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Set' })
], SetEntity);
exports.SetEntity = SetEntity;
//# sourceMappingURL=set.entity.js.map