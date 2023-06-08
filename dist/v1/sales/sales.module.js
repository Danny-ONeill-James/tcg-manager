"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const vendor_entity_1 = require("../../vendors/entities/vendor.entity");
const card_entity_1 = require("../cards/entities/card.entity");
const sale_entity_1 = require("./entities/sale.entity");
const saleItem_entity_1 = require("./entities/saleItem.entity");
const transaction_entity_1 = require("./entities/transaction.entity");
const sales_controller_1 = require("./sales.controller");
const sales_service_1 = require("./sales.service");
let SalesModule = class SalesModule {
};
SalesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                card_entity_1.CardEntity,
                sale_entity_1.SaleEntity,
                saleItem_entity_1.SaleItemEntity,
                transaction_entity_1.TransactionEntity,
                user_entity_1.UserEntity,
                vendor_entity_1.VendorEntity,
            ]),
        ],
        controllers: [sales_controller_1.SalesController],
        providers: [sales_service_1.SalesService],
    })
], SalesModule);
exports.SalesModule = SalesModule;
//# sourceMappingURL=sales.module.js.map