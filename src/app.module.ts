import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MagicTheGatheringApiModule } from './api-connections/magic-the-gathering-api/magic-the-gathering-api.module';
import { PokemonCardsApiModule } from './api-connections/pokemon-cards-api/pokemon-cards-api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { BinderModule } from './v1/binder/binder.module';
import { CardsModule } from './v1/cards/cards.module';
import { CardEntity } from './v1/cards/entities/card.entity';
import { CommandModule } from './v1/command/command.module';
import { GameEntity } from './v1/games/entities/game.entity';
import { GamesModule } from './v1/games/games.module';
import { PublicModule } from './v1/public/public.module';
import { SaleEntity } from './v1/sales/entities/sale.entity';
import { SaleItemEntity } from './v1/sales/entities/saleItem.entity';
import { TransactionEntity } from './v1/sales/entities/transaction.entity';
import { SalesModule } from './v1/sales/sales.module';
import { SeriesEntity } from './v1/series/entities/series.entity';
import { SeriesModule } from './v1/series/series.module';
import { SetEntity } from './v1/sets/entities/set.entity';
import { SetsModule } from './v1/sets/sets.module';
import { StockEntity } from './v1/stock/entities/stock.entity';
import { StockModule } from './v1/stock/stock.module';
import { VendorEntity } from './vendors/entities/vendor.entity';
import { VendorUsersEntity } from './vendors/entities/vendor.users.entity';
import { VendorsModule } from './vendors/vendors.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [
        CardEntity,
        GameEntity,
        SaleEntity,
        SaleItemEntity,
        SeriesEntity,
        SetEntity,
        StockEntity,
        TransactionEntity,
        UserEntity,
        VendorEntity,
        VendorUsersEntity,
      ],
      synchronize: true,
    }),
    AuthModule,
    CardsModule,
    CommandModule,
    GamesModule,
    PokemonCardsApiModule,
    PublicModule,
    SalesModule,
    SetsModule,
    StockModule,
    SeriesModule,
    UsersModule,
    MagicTheGatheringApiModule,
    VendorsModule,
    BinderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
