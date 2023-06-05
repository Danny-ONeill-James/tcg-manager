import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { InputStockDto } from './dto/inputStock.dto';
import { IStock } from './interface/stock.interface';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private stockService: StockService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<IStock[]> {
    return this.stockService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':userId/:cardSlug')
  findOneCardFromUser(
    @Param('userId') userId: string,
    @Param('cardSlug') cardSlug: string,
  ): Promise<IStock[]> {
    return this.stockService.findOneCardFromUser(userId, cardSlug);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createStockDto: InputStockDto): Promise<IStock> {
    console.log('Body: ' + JSON.stringify(createStockDto));
    return this.stockService.checkStock(createStockDto);
  }
}
