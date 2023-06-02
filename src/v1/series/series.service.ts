import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameEntity } from '../games/entities/game.entity';
import { CreateSeriesDto } from './dto/create-series.dto';
import { SeriesEntity } from './entities/series.entity';
import { ISeries } from './interface/series.interface';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(SeriesEntity)
    private seriesRepository: Repository<SeriesEntity>,
    @InjectRepository(GameEntity)
    private gamesRepository: Repository<GameEntity>,
  ) {}

  async findAll(): Promise<ISeries[]> {
    return this.seriesRepository.find({ relations: { game: true } });
  }

  async findOne(_id: string): Promise<ISeries> {
    return this.seriesRepository.findOne({
      where: { id: _id },
      relations: { game: true },
    });
  }

  findOneBySlug(_slug: string): Promise<ISeries> {
    return this.seriesRepository.findOne({
      where: { slug: _slug },
      relations: { game: true },
    });
  }

  async findAllSeriesInGame(_slug: string): Promise<ISeries[]> {
    const game: GameEntity = await this.gamesRepository.findOne({
      where: { slug: _slug },
      relations: { series: true },
    });
    console.log('Returned Game Object: ', game);
    const series: ISeries[] = await game.series;
    console.log('Series: ', series);
    return series;
  }

  async create(createSeriesDto: CreateSeriesDto) {
    const newGame = this.seriesRepository.create({
      ...createSeriesDto,
    });
    return this.seriesRepository.save(newGame);
  }

  async remove(id: string) {
    return this.seriesRepository.delete(id);
  }
}
