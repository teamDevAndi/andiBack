import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { AtmsService } from './atms.service';

@Controller('atms')
export class AtmsController {
  constructor(private readonly service: AtmsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('lang') lang = 'en') {
    return this.service.findOne(id, lang);
  }

  @Delete(':id')
  delete(@Param('id') id: string ) {
    return this.service.delete(id);
  }
}
