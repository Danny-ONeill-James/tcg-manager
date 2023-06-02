import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateVendorDto } from './dtos/createVendor.dto';
import { IVendor } from './interfaces/vendor.interface';
import { VendorsService } from './vendors.service';

@Controller('vendors')
export class VendorsController {
  constructor(private vendorService: VendorsService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createVendorDto: CreateVendorDto): Promise<IVendor> {
    return this.vendorService.create(createVendorDto);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  getWhereOwner(@Param('id') id: string) {
    console.log('Id in controller: ' + id);
    return this.vendorService.getWhereOwner(id);
  }
}
