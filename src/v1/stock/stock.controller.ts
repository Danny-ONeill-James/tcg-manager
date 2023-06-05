import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ICard } from '../cards/interface/card.interface';
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
  @Get('getCardListForUser/:userId')
  getCardListForUser(@Param('userId') userId: string) {
    console.log('Here');
    return this.stockService.getCardListForUser(userId);
  }

  @UseGuards(AuthGuard)
  @Post('update/:userId/:cardSlug')
  create(
    @Param('userId') userId: string,
    @Param('cardSlug') cardSlug: string,
    @Body() createStockDto: InputStockDto[],
  ): Promise<IStock[]> {
    return this.stockService.updateStockFromCard(
      userId,
      cardSlug,
      createStockDto,
    );
  }

  @UseGuards(AuthGuard)
  @Get(':userId/:cardSlug')
  findOneCardFromUser(
    @Param('userId') userId: string,
    @Param('cardSlug') cardSlug: string,
  ): Promise<IStock[]> {
    return this.stockService.findStockFromCard(userId, cardSlug);
  }
}
