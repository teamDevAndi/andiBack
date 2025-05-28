import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { BusTerminalsService } from './busterminals.service';

@Controller('busterminals')
export class BusTerminalsController {
  constructor(private readonly service: BusTerminalsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('lang') lang = 'en') {
    return this.service.findOne(id, lang);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
