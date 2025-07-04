import { Controller, Get, Body, Param, Delete, Query } from '@nestjs/common';
import { SportAreasService } from './sportareas.service';

@Controller('sportareas')
export class SportAreasController {
  constructor(private readonly service: SportAreasService) {}

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