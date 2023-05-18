import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSaleDto } from './dto/sale.dto';
import { CreateSaleItemDto } from './dto/saleItem.dto';
import { SaleEntity } from './entities/sale.entity';
import { ISale } from './interface/sale.interface';
import { ISaleItem } from './interface/saleItem.interface';
import { SaleItemEntity } from './entities/saleItem.entity';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(SaleEntity)
    private saleRepository: Repository<SaleEntity>,
    @InjectRepository(SaleItemEntity)
    private saleItemRepository: Repository<SaleItemEntity>,
  ) {}

  findAll(): Promise<ISale[]> {
    return this.saleRepository.find({
      relations: { saleItem: { card: true }, transaction: true },
    });
  }

  findOne(_id: string): Promise<ISale> {
    return this.saleRepository.findOne({
      where: { id: _id },
      relations: { transaction: true, saleItem: { card: true } },
    });
  }

  async editOneSale(
    id: string,
    updatedSaleData: Partial<ISale>,
  ): Promise<ISale> {
    try {
      const sale = await this.saleRepository.findOne({
        where: { id },
        relations: { transaction: true, saleItem: { card: true } },
      });

      if (!sale) {
        throw new Error('Sale not found.');
      }

      // Update the sale properties with the provided updated data
      Object.assign(sale, updatedSaleData);

      // Save the updated sale
      const updatedSale = await this.saleRepository.save(sale);

      return updatedSale;
    } catch (error) {
      throw error;
    }
  }

  deleteSale(id: string): Promise<ISale> {
    const returnDeleted = this.saleRepository.findOne({ where: { id } });
    this.saleRepository.delete(id);
    return returnDeleted;
  }

  async createSale(createSaleDto: CreateSaleDto): Promise<ISale> {
    if (createSaleDto.user == null) {
      //TODO: this should have a user attached throug auth
    }

    const newSale = this.saleRepository.create({
      ...createSaleDto,
    });
    return this.saleRepository.save(newSale);
  }

  async createSaleItem(
    createSaleItemDto: CreateSaleItemDto,
  ): Promise<ISaleItem> {
    const newSaleItem = this.saleItemRepository.create({
      ...createSaleItemDto,
    });
    return this.saleItemRepository.save(newSaleItem);
  }
}
