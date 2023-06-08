import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CommandService } from './command.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('command')
export class CommandController {
  constructor(private commandService: CommandService) {}

  @UseGuards(AuthGuard)
  @Get('/update/sets/:gameSlug')
  checkAllSets(@Param('gameSlug') gameSlug: string) {
    return this.commandService.checkAllSets(gameSlug);
  }

  @UseGuards(AuthGuard)
  @Get('/update/cardsInSet/:slug')
  checkCardsInSet(@Param('slug') slug: string) {
    return this.commandService.checkCardsInSet(slug);
  }

  @UseGuards(AuthGuard)
  @Get('/update/allCardsInAllSets/')
  checkAllCardsInSet() {
    return this.commandService.checkAllCardsInAllSets();
  }
}
