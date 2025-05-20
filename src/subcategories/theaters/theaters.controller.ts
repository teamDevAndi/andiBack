import { Controller, Get, Delete, Param, Body, Query } from '@nestjs/common';
import { TheatersService } from './theaters.service';

@Controller('theaters')
export class TheatersController {
  constructor(private readonly service: TheatersService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('lang') lang = 'en') {
    return this.service.findOne(id, lang);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
