import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('games')
export class GamesController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all games';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} game`;
  }

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return 'This action adds a new game';
  }
}
