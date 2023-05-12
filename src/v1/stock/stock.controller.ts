import { Controller, Get } from '@nestjs/common';
import { StockService } from './stock.service';
import { IStock } from './interface/stock.interface';

@Controller('stock')
export class StockController {
  constructor(private stockService: StockService) {}

  @Get()
  findAll(): Promise<IStock[]> {
    return this.stockService.findAll();
  }
}
