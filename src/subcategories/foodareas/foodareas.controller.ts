import { Controller, Get, Delete, Body, Param } from '@nestjs/common';
import { FoodAreasService } from './foodareas.service';

@Controller('foodareas')
export class FoodAreasController {
  constructor(private readonly service: FoodAreasService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
