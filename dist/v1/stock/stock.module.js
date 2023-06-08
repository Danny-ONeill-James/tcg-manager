"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vendors_module_1 = require("../../vendors/vendors.module");
const cards_module_1 = require("../cards/cards.module");
const stock_entity_1 = require("./entities/stock.entity");
const stock_controller_1 = require("./stock.controller");
const stock_service_1 = require("./stock.service");
const vendor_entity_1 = require("../../vendors/entities/vendor.entity");
const card_entity_1 = require("../cards/entities/card.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let StockModule = class StockModule {
};
StockModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                card_entity_1.CardEntity,
                user_entity_1.UserEntity,
                stock_entity_1.StockEntity,
                vendor_entity_1.VendorEntity,
            ]),
            vendors_module_1.VendorsModule,
            cards_module_1.CardsModule,
        ],
        controllers: [stock_controller_1.StockController],
        providers: [stock_service_1.StockService],
    })
], StockModule);
exports.StockModule = StockModule;
//# sourceMappingURL=stock.module.js.map