import { Controller, Get } from '@nestjs/common';
import { CommandService } from './command.service';

@Controller('command')
export class CommandController {
  constructor(private commandService: CommandService) {}

  @Get('/update/sets/')
  checkAllSets() {
    this.commandService.checkAllSets();
    return 'to check all sets';
  }
}
