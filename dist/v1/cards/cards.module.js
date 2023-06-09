"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const saleItem_entity_1 = require("../sales/entities/saleItem.entity");
const set_entity_1 = require("../sets/entities/set.entity");
const stock_entity_1 = require("../stock/entities/stock.entity");
const cards_controller_1 = require("./cards.controller");
const cards_service_1 = require("./cards.service");
const card_entity_1 = require("./entities/card.entity");
let CardsModule = class CardsModule {
};
CardsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                card_entity_1.CardEntity,
                saleItem_entity_1.SaleItemEntity,
                set_entity_1.SetEntity,
                stock_entity_1.StockEntity,
            ]),
        ],
        controllers: [cards_controller_1.CardsController],
        providers: [cards_service_1.CardsService],
        exports: [cards_service_1.CardsService],
    })
], CardsModule);
exports.CardsModule = CardsModule;
//# sourceMappingURL=cards.module.js.map