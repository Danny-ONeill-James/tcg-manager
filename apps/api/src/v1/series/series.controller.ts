import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { ISeries } from './interface/series.interface';
import { SeriesService } from './series.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('series')
export class SeriesController {
  constructor(private seriesService: SeriesService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<ISeries[]> {
    return this.seriesService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('findOne')
  findOne(@Body('id') id: string): Promise<ISeries> {
    return this.seriesService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Get('findSeriesInGame/:slug')
  findAllSeriesInGame(@Param('slug') slug: string): Promise<ISeries[]> {
    console.log('Game input: ', slug);
    return this.seriesService.findAllSeriesInGame(slug);
  }

  @UseGuards(AuthGuard)
  @Get('findOneBySlug/:slug')
  findOneBySlug(@Param('slug') slug: string): Promise<ISeries> {
    return this.seriesService.findOneBySlug(slug);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createGameDto: CreateSeriesDto): Promise<ISeries> {
    return this.seriesService.create(createGameDto);
  }

  @UseGuards(AuthGuard)
  @Delete()
  async deleteAll() {
    const allSeries = await this.seriesService.findAll();
    allSeries.forEach((element) => {
      return this.seriesService.remove(element.id);
    });
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param() id: string) {
    return this.seriesService.remove(id);
  }
}
