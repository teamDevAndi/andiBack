import { Controller, Get, Delete, Param, Body } from '@nestjs/common';
import { MuseumsService } from './museums.service';

@Controller('museums')
export class MuseumsController {
  constructor(private readonly service: MuseumsService) {}

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
