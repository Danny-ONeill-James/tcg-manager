"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonCardsApiModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const series_entity_1 = require("../../v1/series/entities/series.entity");
const series_service_1 = require("../../v1/series/series.service");
const set_entity_1 = require("../../v1/sets/entities/set.entity");
const pokemon_cards_api_controller_1 = require("./pokemon-cards-api.controller");
const pokemon_cards_api_service_1 = require("./pokemon-cards-api.service");
const games_service_1 = require("../../v1/games/games.service");
const game_entity_1 = require("../../v1/games/entities/game.entity");
const sets_service_1 = require("../../v1/sets/sets.service");
const cards_service_1 = require("../../v1/cards/cards.service");
const card_entity_1 = require("../../v1/cards/entities/card.entity");
let PokemonCardsApiModule = class PokemonCardsApiModule {
};
PokemonCardsApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([set_entity_1.SetEntity, series_entity_1.SeriesEntity, game_entity_1.GameEntity, card_entity_1.CardEntity]),
        ],
        controllers: [pokemon_cards_api_controller_1.PokemonCardsApiController],
        providers: [
            pokemon_cards_api_service_1.PokemonCardsApiService,
            series_service_1.SeriesService,
            games_service_1.GamesService,
            sets_service_1.SetsService,
            cards_service_1.CardsService,
        ],
    })
], PokemonCardsApiModule);
exports.PokemonCardsApiModule = PokemonCardsApiModule;
//# sourceMappingURL=pokemon-cards-api.module.js.map