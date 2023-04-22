import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { ISeries } from './interface/series.interface';
import { SeriesService } from './series.service';

@Controller('series')
export class SeriesController {
  constructor(private seriesService: SeriesService) {}

  @Get()
  findAll(): Promise<ISeries[]> {
    return this.seriesService.findAll();
  }

  @Get('findOne')
  findOne(@Body('id') id: string): Promise<ISeries> {
    return this.seriesService.findOne(id);
  }

  @Get('findOneBySlug/:slug')
  findOneBySlug(@Param('slug') slug: string): Promise<ISeries> {
    return this.seriesService.findOneBySlug(slug);
  }

  @Post()
  create(@Body() createGameDto: CreateSeriesDto): Promise<ISeries> {
    return this.seriesService.create(createGameDto);
  }

  @Delete(':id')
  delete(@Param() id: string) {
    return this.seriesService.remove(id);
  }
}