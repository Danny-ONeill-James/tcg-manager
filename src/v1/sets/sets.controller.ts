import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SetsService } from './sets.service';
import { ISet } from './interface/sets.interface';
import { CreateSetDto } from './dto/create-set.dto';

@Controller('sets')
export class SetsController {
  constructor(private setsService: SetsService) {}

  @Get()
  findAll(): Promise<ISet[]> {
    return this.setsService.findAll();
  }

  @Get('findOne')
  findOne(@Body('id') id: string): Promise<ISet> {
    return this.setsService.findOne(id);
  }

  @Get('findOneBySlug/:slug')
  findOneBySlug(@Param('slug') slug: string): Promise<ISet> {
    return this.setsService.findOneBySlug(slug);
  }

  @Post()
  create(@Body() createSetDto: CreateSetDto): Promise<ISet> {
    return this.setsService.create(createSetDto);
  }

  @Delete(':id')
  delete(@Param() id: string) {
    return this.setsService.remove(id);
  }
}
