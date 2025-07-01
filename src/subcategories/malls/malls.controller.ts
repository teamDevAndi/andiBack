import { Controller, Get, Delete, Param, Query } from '@nestjs/common';
import { MallsService } from './malls.service';
@Controller('malls')
export class MallsController {
  constructor(private readonly service: MallsService) {}

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
