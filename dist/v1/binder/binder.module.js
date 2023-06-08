"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vendor_entity_1 = require("../../vendors/entities/vendor.entity");
const binder_controller_1 = require("./binder.controller");
const binder_service_1 = require("./binder.service");
const binder_entity_1 = require("./entities/binder.entity");
const stockInBinder_entity_1 = require("./entities/stockInBinder.entity");
let BinderModule = class BinderModule {
};
BinderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([binder_entity_1.BinderEntity, stockInBinder_entity_1.StockInBinderEntity, vendor_entity_1.VendorEntity]),
        ],
        controllers: [binder_controller_1.BinderController],
        providers: [binder_service_1.BinderService],
    })
], BinderModule);
exports.BinderModule = BinderModule;
//# sourceMappingURL=binder.module.js.map