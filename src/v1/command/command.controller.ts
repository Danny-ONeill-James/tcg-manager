import { Controller, Get } from '@nestjs/common';
import { CommandService } from './command.service';

@Controller('command')
export class CommandController {
  constructor(private commandService: CommandService) {}

  @Get('/update/sets/')
  checkAllSets() {
    return this.commandService.checkAllSets();
  }

  @Get('/update/cardsInSet/')
  checkAllCardsInSet() {
    return this.commandService.checkCardsInSet();
  }
}
