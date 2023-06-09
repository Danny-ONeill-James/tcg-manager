import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSetDto } from './dto/create-set.dto';
import { SetEntity } from './entities/set.entity';
import { ISet } from './interface/sets.interface';
import { SeriesEntity } from '../series/entities/series.entity';
import { SeriesService } from '../series/series.service';
import { ISeries } from '../series/interface/series.interface';

@Injectable()
export class SetsService {
  constructor(
    @InjectRepository(SetEntity)
    private setsRepository: Repository<SetEntity>,
    private seriesService: SeriesService,
  ) {}

  async findAll(): Promise<ISet[]> {
    return this.setsRepository.find({ relations: { series: { game: true } } });
  }

  async findOne(_id: string): Promise<ISet> {
    return this.setsRepository.findOne({
      where: { id: _id },
      relations: { series: { game: true } },
    });
  }

  findOneBySlug(_slug: string): Promise<ISet> {
    return this.setsRepository.findOne({
      where: { slug: _slug },
      relations: { series: { game: true } },
    });
  }

  async findSetsInSeries(_slug: string): Promise<ISet[]> {
    const series: ISeries = await this.seriesService.findOneBySlug(_slug);
    console.log('Returned Game Object: ', series);
    const set: ISet[] = await series.set;
    console.log('Series: ', series);
    return set;
  }

  async create(createSetDto: CreateSetDto) {
    const newSet = this.setsRepository.create({
      ...createSetDto,
    });
    return this.setsRepository.save(newSet);
  }

  async remove(id: string) {
    return this.setsRepository.delete(id);
  }
}
