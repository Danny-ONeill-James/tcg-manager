import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { BinderService } from './binder.service';
import { IBinder } from './interface/binder.interface';
import { UserEntity } from 'src/users/entities/user.entity';

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

  @UseGuards()
  @Get('single/:userId/:slug')
  getSingleBinder(
    @Param('userId') userId: string,
    @Param('slug') slug: string,
  ): Promise<IBinder> {
    return this.binderService.getSingleBinder(userId, slug);
  }
}
