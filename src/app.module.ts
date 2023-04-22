import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsController } from './v1/cards/cards.controller';
import { CardsModule } from './v1/cards/cards.module';
import { CardsService } from './v1/cards/cards.service';
import { CardEntity } from './v1/cards/entities/card.entity';
import { GameEntity } from './v1/games/entities/game.entity';
import { GamesModule } from './v1/games/games.module';
import { PublicModule } from './v1/public/public.module';
import { SeriesEntity } from './v1/series/entities/series.entity';
import { SeriesModule } from './v1/series/series.module';
import { SetEntity } from './v1/sets/entities/set.entity';
import { SetsModule } from './v1/sets/sets.module';

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
      entities: [CardEntity, GameEntity, SeriesEntity, SetEntity],
      synchronize: true,
    }),
    PublicModule,
    GamesModule,
    SeriesModule,
    SetsModule,
    CardsModule,
  ],
  controllers: [AppController, CardsController],
  providers: [AppService, CardsService],
})
export class AppModule {}
