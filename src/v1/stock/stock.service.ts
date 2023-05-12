import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StockEntity } from './entities/stock.entity';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(StockEntity)
    private stockRepository: Repository<StockEntity>,
  ) {}

  findAll(): Promise<import('./interface/stock.interface').IStock[]> {
    return this.stockRepository.find();
  }
}
