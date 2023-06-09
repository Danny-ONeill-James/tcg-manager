import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { CreateGameDto } from './dto/create-game.dto';
import { GamesService } from './games.service';
import { IGame } from './interface/games.interface';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('games')
export class GamesController {
  constructor(private gameService: GamesService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<IGame[]> {
    return this.gameService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('findOne')
  findOne(@Body('id') id: string): Promise<IGame> {
    return this.gameService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Get('findOneBySlug/:slug')
  findOneBySlug(@Param('slug') slug: string): Promise<IGame> {
    return this.gameService.findOneBySlug(slug);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createGameDto: CreateGameDto): Promise<IGame> {
    return this.gameService.create(createGameDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param() id: string) {
    return this.gameService.remove(id);
  }
}
