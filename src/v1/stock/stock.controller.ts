import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { InputStockDto } from './dto/inputStock.dto';
import { IStock } from './interface/stock.interface';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private stockService: StockService) {}

  @Get()
  findAll(): Promise<IStock[]> {
    return this.stockService.findAll();
  }

  @Get(':cardId')
  findOne(@Param('cardId') cardId: string): Promise<IStock> {
    return this.stockService.findOne(cardId);
  }

  @Put()
  create(@Body() createStockDto: InputStockDto): Promise<IStock> {
    console.log('Body: ' + JSON.stringify(createStockDto));
    return this.stockService.checkStock(createStockDto);
  }
}
