import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SetsService } from './sets.service';
import { ISet } from './interface/sets.interface';
import { CreateSetDto } from './dto/create-set.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('sets')
export class SetsController {
  constructor(private setsService: SetsService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<ISet[]> {
    return this.setsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('findOne')
  findOne(@Body('id') id: string): Promise<ISet> {
    return this.setsService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Get('findSetsInSeries/:slug')
  findSetsInSeries(@Param('slug') slug: string): Promise<ISet[]> {
    console.log('Series input: ', slug);
    return this.setsService.findSetsInSeries(slug);
  }

  @UseGuards(AuthGuard)
  @Get('findOneBySlug/:slug')
  findOneBySlug(@Param('slug') slug: string): Promise<ISet> {
    return this.setsService.findOneBySlug(slug);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createSetDto: CreateSetDto): Promise<ISet> {
    return this.setsService.create(createSetDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param() id: string) {
    return this.setsService.remove(id);
  }
}
