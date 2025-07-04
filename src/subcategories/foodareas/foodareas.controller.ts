import { Controller, Get, Delete, Body, Param, Query } from '@nestjs/common';
import { FoodAreasService } from './foodareas.service';

@Controller('foodareas')
export class FoodAreasController {
  constructor(private readonly service: FoodAreasService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':place_id')
  findOne(@Param('place_id') place_id: string, @Query('lang') lang = 'en') {
    return this.service.findOne(place_id,lang);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
