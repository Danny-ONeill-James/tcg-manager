import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSaleDto } from './dto/sale.dto';
import { CreateSaleItemDto } from './dto/saleItem.dto';
import { ISale } from './interface/sale.interface';
import { ISaleItem } from './interface/saleItem.interface';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  constructor(private salesService: SalesService) {}

  @Get()
  findAll(): Promise<ISale[]> {
    return this.salesService.findAll();
  }

  @Get('findOne')
  findOne(@Body('id') id: string): Promise<ISale> {
    return this.salesService.findOne(id);
  }

  @Post('sale')
  createSale(@Body() createSaleDto: CreateSaleDto): Promise<ISale> {
    return this.salesService.createSale(createSaleDto);
  }

  @Post('saleItem')
  createSaleItem(
    @Body() createSaleItemDto: CreateSaleItemDto,
  ): Promise<ISaleItem> {
    return this.salesService.createSaleItem(createSaleItemDto);
  }
}
