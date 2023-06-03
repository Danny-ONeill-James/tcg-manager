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
  @Get(':userId/:vendorSlug')
  findOne(
    @Param('userId') userId: string,
    @Param('vendorSlug') vendorSlug: string,
  ): Promise<IVendor> {
    console.log('Id in controller: ' + userId);
    return this.vendorService.findOne(userId, vendorSlug);
  }

  @UseGuards(AuthGuard)
  @Get('/owner/:id')
  getWhereOwner(@Param('id') id: string) {
    console.log('Id in controller: ' + id);
    return this.vendorService.getWhereOwner(id);
  }
}
