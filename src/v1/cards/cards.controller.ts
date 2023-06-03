import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { ICard } from './interface/card.interface';

@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<ICard[]> {
    return this.cardsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('findOne')
  findOne(@Body('id') id: string): Promise<ICard> {
    return this.cardsService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Get('activeSearch/:searchTerm')
  findForActiveSearch(
    @Param('searchTerm') searchTerm: string,
  ): Promise<ICard[]> {
    return this.cardsService.findForActiveSearch(searchTerm);
  }

  @UseGuards(AuthGuard)
  @Get('findOneBySlug/:slug')
  findOneBySlug(@Param('slug') slug: string): Promise<ICard> {
    return this.cardsService.findOneBySlug(slug);
  }

  @UseGuards(AuthGuard)
  @Get('findCardsInSet/:slug')
  findAllCardsInSet(@Param('slug') slug: string): Promise<ICard[]> {
    return this.cardsService.findAllCardsInSet(slug);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createCardDto: CreateCardDto): Promise<ICard> {
    return this.cardsService.create(createCardDto);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Body() updateGameDto: CreateCardDto, @Param('id') inputId: string) {
    return this.cardsService.update(inputId, updateGameDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param() id: string) {
    return this.cardsService.remove(id);
  }
}
