import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { ParkingsService } from './parkings.service';

@Controller('parkings')
export class ParkingsController {
  constructor(private readonly service: ParkingsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('lang') lang = 'en') {
    return this.service.findOne(id, lang);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
