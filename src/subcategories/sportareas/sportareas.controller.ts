import { Controller, Get, Body, Param, Delete } from '@nestjs/common';
import { SportAreasService } from './sportareas.service';

@Controller('sportareas')
export class SportAreasController {
  constructor(private readonly service: SportAreasService) {}

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