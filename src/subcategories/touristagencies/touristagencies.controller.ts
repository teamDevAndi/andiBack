import { Controller, Get, Param, Body, Delete, Query } from '@nestjs/common';
import { TouristAgenciesService } from './touristagencies.service';


@Controller('touristagencies')
export class TouristAgenciesController {
  constructor(private readonly service: TouristAgenciesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':place_id')
  findOne(@Param('place_id') place_id: string, @Query('lang') lang = 'en') {
    return this.service.findOne(place_id, lang);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
