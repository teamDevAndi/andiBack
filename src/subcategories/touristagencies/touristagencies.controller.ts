import { Controller, Get, Param, Body, Delete } from '@nestjs/common';
import { TouristAgenciesService } from './touristagencies.service';


@Controller('touristagencies')
export class TouristAgenciesController {
  constructor(private readonly service: TouristAgenciesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
