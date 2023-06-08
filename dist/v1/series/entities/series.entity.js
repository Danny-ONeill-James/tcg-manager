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
exports.SeriesEntity = void 0;
const paranoid_entity_1 = require("../../common/entities/paranoid.entity");
const game_entity_1 = require("../../games/entities/game.entity");
const set_entity_1 = require("../../sets/entities/set.entity");
const typeorm_1 = require("typeorm");
let SeriesEntity = class SeriesEntity extends paranoid_entity_1.ParanoidEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], SeriesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SeriesEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SeriesEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SeriesEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => game_entity_1.GameEntity, (gameEntity) => gameEntity.series),
    __metadata("design:type", game_entity_1.GameEntity)
], SeriesEntity.prototype, "game", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => set_entity_1.SetEntity, (setEntity) => setEntity.series),
    __metadata("design:type", Array)
], SeriesEntity.prototype, "set", void 0);
SeriesEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Series' })
], SeriesEntity);
exports.SeriesEntity = SeriesEntity;
//# sourceMappingURL=series.entity.js.map