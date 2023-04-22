import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { ICard } from './interface/card.interface';

@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Get()
  findAll(): Promise<ICard[]> {
    return this.cardsService.findAll();
  }

  @Get('findOne')
  findOne(@Body('id') id: string): Promise<ICard> {
    return this.cardsService.findOne(id);
  }

  @Get('findOneBySlug/:slug')
  findOneBySlug(@Param('slug') slug: string): Promise<ICard> {
    return this.cardsService.findOneBySlug(slug);
  }

  @Get('findCardsInSet/:slug')
  findAllCardsInSet(@Param('slug') slug: string): Promise<ICard[]> {
    return this.cardsService.findAllCardsInSet(slug);
  }

  @Post()
  create(@Body() createCardDto: CreateCardDto): Promise<ICard> {
    return this.cardsService.create(createCardDto);
  }

  @Delete(':id')
  delete(@Param() id: string) {
    return this.cardsService.remove(id);
  }
}
