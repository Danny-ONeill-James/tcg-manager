import { Controller, Get, Param } from '@nestjs/common';
import { CommandService } from './command.service';

@Controller('command')
export class CommandController {
  constructor(private commandService: CommandService) {}

  @Get('/update/sets/')
  checkAllSets() {
    return this.commandService.checkAllSets();
  }

  @Get('/update/cardsInSet/:slug')
  checkCardsInSet(@Param('slug') slug: string) {
    return this.commandService.checkCardsInSet(slug);
  }

  @Get('/update/allCardsInAllSets/')
  checkAllCardsInSet() {
    return this.commandService.checkAllCardsInAllSets();
  }
}
