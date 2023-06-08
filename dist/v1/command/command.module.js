"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandModule = void 0;
const common_1 = require("@nestjs/common");
const pokemon_cards_api_service_1 = require("../../api-connections/pokemon-cards-api/pokemon-cards-api.service");
const command_controller_1 = require("./command.controller");
const command_service_1 = require("./command.service");
const typeorm_1 = require("@nestjs/typeorm");
const set_entity_1 = require("../sets/entities/set.entity");
const sets_service_1 = require("../sets/sets.service");
const series_service_1 = require("../series/series.service");
const series_entity_1 = require("../series/entities/series.entity");
const game_entity_1 = require("../games/entities/game.entity");
const games_service_1 = require("../games/games.service");
const cards_service_1 = require("../cards/cards.service");
const card_entity_1 = require("../cards/entities/card.entity");
const magic_the_gathering_api_service_1 = require("../../api-connections/magic-the-gathering-api/magic-the-gathering-api.service");
let CommandModule = class CommandModule {
};
CommandModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([set_entity_1.SetEntity, series_entity_1.SeriesEntity, game_entity_1.GameEntity, card_entity_1.CardEntity]),
        ],
        controllers: [command_controller_1.CommandController],
        providers: [
            command_service_1.CommandService,
            magic_the_gathering_api_service_1.MagicTheGatheringApiService,
            pokemon_cards_api_service_1.PokemonCardsApiService,
            sets_service_1.SetsService,
            series_service_1.SeriesService,
            games_service_1.GamesService,
            cards_service_1.CardsService,
        ],
    })
], CommandModule);
exports.CommandModule = CommandModule;
//# sourceMappingURL=command.module.js.map