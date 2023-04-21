import { Controller, Get, Param, Post, Req } from '@nestjs/common';

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
  create(): string {
    return 'This action adds a new game';
  }
}
