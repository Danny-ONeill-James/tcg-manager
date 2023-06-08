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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandController = void 0;
const common_1 = require("@nestjs/common");
const command_service_1 = require("./command.service");
const auth_guard_1 = require("../../auth/auth.guard");
let CommandController = class CommandController {
    constructor(commandService) {
        this.commandService = commandService;
    }
    checkAllSets(gameSlug) {
        return this.commandService.checkAllSets(gameSlug);
    }
    checkCardsInSet(slug) {
        return this.commandService.checkCardsInSet(slug);
    }
    checkAllCardsInSet() {
        return this.commandService.checkAllCardsInAllSets();
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/update/sets/:gameSlug'),
    __param(0, (0, common_1.Param)('gameSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommandController.prototype, "checkAllSets", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/update/cardsInSet/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommandController.prototype, "checkCardsInSet", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/update/allCardsInAllSets/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommandController.prototype, "checkAllCardsInSet", null);
CommandController = __decorate([
    (0, common_1.Controller)('command'),
    __metadata("design:paramtypes", [command_service_1.CommandService])
], CommandController);
exports.CommandController = CommandController;
//# sourceMappingURL=command.controller.js.map