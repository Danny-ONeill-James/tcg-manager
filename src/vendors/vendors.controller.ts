import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateVendorDto } from './dtos/createVendor.dto';
import { VendorsService } from './vendors.service';
import { IVendor } from './interfaces/vendor.interface';

@Controller('vendors')
export class VendorsController {
  constructor(private vendorService: VendorsService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createVendorDto: CreateVendorDto): Promise<IVendor> {
    return this.vendorService.create(createVendorDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  getWhereOwner(@Body() id: string): Promise<IVendor[]> {
    return this.vendorService.getWhereOwner(id);
  }
}
