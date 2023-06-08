"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const magic_the_gathering_api_module_1 = require("./api-connections/magic-the-gathering-api/magic-the-gathering-api.module");
const pokemon_cards_api_module_1 = require("./api-connections/pokemon-cards-api/pokemon-cards-api.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const user_entity_1 = require("./users/entities/user.entity");
const users_module_1 = require("./users/users.module");
const binder_module_1 = require("./v1/binder/binder.module");
const binder_entity_1 = require("./v1/binder/entities/binder.entity");
const stockInBinder_entity_1 = require("./v1/binder/entities/stockInBinder.entity");
const cards_module_1 = require("./v1/cards/cards.module");
const card_entity_1 = require("./v1/cards/entities/card.entity");
const command_module_1 = require("./v1/command/command.module");
const game_entity_1 = require("./v1/games/entities/game.entity");
const games_module_1 = require("./v1/games/games.module");
const public_module_1 = require("./v1/public/public.module");
const sale_entity_1 = require("./v1/sales/entities/sale.entity");
const saleItem_entity_1 = require("./v1/sales/entities/saleItem.entity");
const transaction_entity_1 = require("./v1/sales/entities/transaction.entity");
const sales_module_1 = require("./v1/sales/sales.module");
const series_entity_1 = require("./v1/series/entities/series.entity");
const series_module_1 = require("./v1/series/series.module");
const set_entity_1 = require("./v1/sets/entities/set.entity");
const sets_module_1 = require("./v1/sets/sets.module");
const stock_entity_1 = require("./v1/stock/entities/stock.entity");
const stock_module_1 = require("./v1/stock/stock.module");
const vendor_entity_1 = require("./vendors/entities/vendor.entity");
const vendor_users_entity_1 = require("./vendors/entities/vendor.users.entity");
const vendors_module_1 = require("./vendors/vendors.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.MYSQL_HOST,
                port: 3306,
                username: process.env.MYSQL_USERNAME,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE,
                entities: [
                    binder_entity_1.BinderEntity,
                    card_entity_1.CardEntity,
                    game_entity_1.GameEntity,
                    sale_entity_1.SaleEntity,
                    saleItem_entity_1.SaleItemEntity,
                    series_entity_1.SeriesEntity,
                    set_entity_1.SetEntity,
                    stock_entity_1.StockEntity,
                    stockInBinder_entity_1.StockInBinderEntity,
                    transaction_entity_1.TransactionEntity,
                    user_entity_1.UserEntity,
                    vendor_entity_1.VendorEntity,
                    vendor_users_entity_1.VendorUsersEntity,
                ],
                synchronize: true,
            }),
            auth_module_1.AuthModule,
            cards_module_1.CardsModule,
            command_module_1.CommandModule,
            games_module_1.GamesModule,
            pokemon_cards_api_module_1.PokemonCardsApiModule,
            public_module_1.PublicModule,
            sales_module_1.SalesModule,
            sets_module_1.SetsModule,
            stock_module_1.StockModule,
            series_module_1.SeriesModule,
            users_module_1.UsersModule,
            magic_the_gathering_api_module_1.MagicTheGatheringApiModule,
            vendors_module_1.VendorsModule,
            binder_module_1.BinderModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map