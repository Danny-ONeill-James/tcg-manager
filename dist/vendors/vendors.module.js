"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const sale_entity_1 = require("../v1/sales/entities/sale.entity");
const stock_entity_1 = require("../v1/stock/entities/stock.entity");
const vendor_entity_1 = require("./entities/vendor.entity");
const vendor_users_entity_1 = require("./entities/vendor.users.entity");
const vendors_controller_1 = require("./vendors.controller");
const vendors_service_1 = require("./vendors.service");
let VendorsModule = class VendorsModule {
};
VendorsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                sale_entity_1.SaleEntity,
                stock_entity_1.StockEntity,
                vendor_entity_1.VendorEntity,
                vendor_users_entity_1.VendorUsersEntity,
                user_entity_1.UserEntity,
            ]),
        ],
        controllers: [vendors_controller_1.VendorsController],
        providers: [vendors_service_1.VendorsService],
        exports: [vendors_service_1.VendorsService],
    })
], VendorsModule);
exports.VendorsModule = VendorsModule;
//# sourceMappingURL=vendors.module.js.map