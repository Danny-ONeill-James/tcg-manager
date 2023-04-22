import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSeriesDto } from './dto/create-series.dto';
import { SeriesEntity } from './entities/series.entity';
import { ISeries } from './interface/series.interface';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(SeriesEntity)
    private seriesRepository: Repository<SeriesEntity>,
  ) {}

  async findAll(): Promise<ISeries[]> {
    return this.seriesRepository.find();
  }

  async findOne(_id: string): Promise<ISeries> {
    return this.seriesRepository.findOne({
      where: { id: _id },
    });
  }

  findOneBySlug(_slug: string): Promise<ISeries> {
    return this.seriesRepository.findOne({
      where: { slug: _slug },
    });
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
