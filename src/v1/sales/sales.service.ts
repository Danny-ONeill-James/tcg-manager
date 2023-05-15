import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSaleDto } from './dto/sale.dto';
import { SaleEntity } from './entities/sale.entity';
import { ISale } from './interface/sale.interface';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(SaleEntity)
    private saleRepository: Repository<SaleEntity>,
  ) {}

  findAll(): Promise<ISale[]> {
    return this.saleRepository.find({
      relations: { saleItem: true, transaction: true },
    });
  }

  create(createSaleDto: CreateSaleDto): Promise<ISale> {
    const newSale = this.saleRepository.create({
      ...createSaleDto,
    });
    return this.saleRepository.save(newSale);
  }
}
