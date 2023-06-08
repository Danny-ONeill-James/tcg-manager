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
exports.CommandService = void 0;
const common_1 = require("@nestjs/common");
const pokemon_cards_api_service_1 = require("../../api-connections/pokemon-cards-api/pokemon-cards-api.service");
const sets_service_1 = require("../sets/sets.service");
let CommandService = class CommandService {
    constructor(pokemonCardsApiService, setsService) {
        this.pokemonCardsApiService = pokemonCardsApiService;
        this.setsService = setsService;
    }
    async checkAllSets(gameSlug) {
        await this.pokemonCardsApiService.updateSeriesAndSets(gameSlug);
        return 'Updated all sets and Series In the TCGs';
    }
    async checkAllCardsInAllSets() {
        const setsList = await this.setsService.findAll();
        setsList.forEach(async (set) => {
            setTimeout(async () => {
                await this.checkCardsInSet(set.slug);
            }, 10000);
        });
    }
    async checkCardsInSet(setSlug) {
        const apiResults = await this.pokemonCardsApiService.updateCardsInSet(setSlug);
        return await apiResults;
    }
};
CommandService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pokemon_cards_api_service_1.PokemonCardsApiService,
        sets_service_1.SetsService])
], CommandService);
exports.CommandService = CommandService;
//# sourceMappingURL=command.service.js.map