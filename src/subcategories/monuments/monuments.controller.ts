import { Controller, Get, Delete, Param, Query } from '@nestjs/common';
import { MonumentsService } from './monuments.service';

@Controller('monuments')
export class MonumentsController {
  constructor(private readonly service: MonumentsService) {}

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
