import { Controller, Get, Delete, Param, Query } from '@nestjs/common';
import { UniqueStoresService } from './uniquestores.service';

@Controller('uniquestores')
export class UniqueStoresController {
  constructor(private readonly service: UniqueStoresService) {}
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
