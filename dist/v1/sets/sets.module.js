"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const series_module_1 = require("../series/series.module");
const set_entity_1 = require("./entities/set.entity");
const sets_controller_1 = require("./sets.controller");
const sets_service_1 = require("./sets.service");
let SetsModule = class SetsModule {
};
SetsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([set_entity_1.SetEntity]), series_module_1.SeriesModule],
        controllers: [sets_controller_1.SetsController],
        providers: [sets_service_1.SetsService],
    })
], SetsModule);
exports.SetsModule = SetsModule;
//# sourceMappingURL=sets.module.js.map