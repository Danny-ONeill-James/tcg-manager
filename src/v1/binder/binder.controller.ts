import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { BinderService } from './binder.service';
import { InputBinderDto } from './dto/binder.dto';
import { IBinder } from './interface/binder.interface';

@Controller('binder')
export class BinderController {
  constructor(private binderService: BinderService) {}

  @UseGuards(AuthGuard)
  @Post(':userId')
  create(@Param('userId') userId: string): Promise<IBinder> {
    return this.binderService.createBinder(userId);
  }

  @UseGuards(AuthGuard)
  @Get(':userId')
  getAllBindersForUser(@Param('userId') userId: string): Promise<IBinder[]> {
    return this.binderService.getAllBindersForUser(userId);
  }
}
