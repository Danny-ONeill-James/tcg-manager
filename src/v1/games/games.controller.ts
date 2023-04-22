import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { GamesService } from './games.service';
import { IGame } from './interface/games.interface';

@Controller('games')
export class GamesController {
  constructor(private gameService: GamesService) {}

  @Get()
  findAll(): Promise<IGame[]> {
    return this.gameService.findAll();
  }

  @Get('findOne')
  findOne(@Body('id') id: string): Promise<IGame> {
    return this.gameService.findOne(id);
  }

  @Post()
  create(@Body() createGameDto: CreateGameDto): Promise<IGame> {
    return this.gameService.create(createGameDto);
  }

  @Delete()
  delete(@Body() id: string) {
    return this.gameService.remove(id);
  }
}
