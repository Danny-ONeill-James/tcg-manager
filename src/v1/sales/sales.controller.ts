import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSaleDto } from './dto/sale.dto';
import { ISale } from './interface/sale.interface';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  constructor(private salesService: SalesService) {}

  @Get()
  findAll(): Promise<ISale[]> {
    return this.salesService.findAll();
  }

  @Post()
  create(@Body() createSaleDto: CreateSaleDto): Promise<ISale> {
    return this.salesService.create(createSaleDto);
  }
}
