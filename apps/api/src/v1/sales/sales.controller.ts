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
import { CreateSaleDto } from './dto/sale.dto';
import { CreateSaleItemDto } from './dto/saleItem.dto';
import { ISale } from './interface/sale.interface';
import { ISaleItem } from './interface/saleItem.interface';
import { SalesService } from './sales.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('sales')
export class SalesController {
  constructor(private salesService: SalesService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<ISale[]> {
    return this.salesService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('findOne/:id')
  findOne(@Param('id') id: string): Promise<ISale> {
    return this.salesService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Post('sale')
  createSale(@Body() createSaleDto: CreateSaleDto): Promise<ISale> {
    return this.salesService.createSale(createSaleDto);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  editOneSale(
    @Param('id') id: string,
    @Body() updatedSaleData: Partial<ISale>,
  ): Promise<ISale> {
    return this.salesService.editOneSale(id, updatedSaleData);
  }

  @UseGuards(AuthGuard)
  @Post('saleItem')
  createSaleItem(
    @Body() createSaleItemDto: CreateSaleItemDto,
  ): Promise<ISaleItem> {
    return this.salesService.createSaleItem(createSaleItemDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  deleteSale(@Param('id') id: string) {
    return this.salesService.deleteSale(id);
  }
}
