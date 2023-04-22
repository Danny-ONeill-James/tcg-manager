import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublicModule } from './v1/public/public.module';
import { GamesModule } from './v1/games/games.module';
import { GamesService } from './v1/games/games.service';

@Module({
  imports: [PublicModule, GamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
