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
exports.GamesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const game_entity_1 = require("./entities/game.entity");
let GamesService = class GamesService {
    constructor(gameRepository) {
        this.gameRepository = gameRepository;
    }
    async findAll() {
        return this.gameRepository.find();
    }
    async findOne(_id) {
        return this.gameRepository.findOne({
            where: { id: _id },
        });
    }
    findOneBySlug(_slug) {
        return this.gameRepository.findOne({
            where: { slug: _slug },
        });
    }
    async create(createGameDto) {
        const newGame = this.gameRepository.create(Object.assign({}, createGameDto));
        return this.gameRepository.save(newGame);
    }
    async remove(id) {
        return this.gameRepository.delete(id);
    }
};
GamesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(game_entity_1.GameEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GamesService);
exports.GamesService = GamesService;
//# sourceMappingURL=games.service.js.map