import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { InputStockDto } from './dto/inputStock.dto';
import { IStock } from './interface/stock.interface';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/createStock.dto';
import { UpdateResult } from 'typeorm';

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
  findStockFromCard(
    @Param('userId') userId: string,
    @Param('cardSlug') cardSlug: string,
  ): Promise<IStock[]> {
    return this.stockService.findStockFromCard(userId, cardSlug);
  }

  @UseGuards(AuthGuard)
  @Put(':userId/:cardSlug')
  updateStockForCard(
    @Param('userId') userId: string,
    @Param('cardSlug') cardSlug: string,
    @Body('updateStock') updateStock: InputStockDto[],
  ): Promise<IStock[]> {
    return this.stockService.updateStockFromCard(userId, cardSlug, updateStock);
  }
}
