import { Controller, Get, Delete, Param, Body, Query } from '@nestjs/common';
import { MuseumsService } from './museums.service';

@Controller('museums')
export class MuseumsController {
  constructor(private readonly service: MuseumsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':place_id')
  findOne(@Param('place_id') place_id: string, @Query('lang') lang = 'en') {
    return this.service.findOne(place_id, lang);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
