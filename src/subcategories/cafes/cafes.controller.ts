import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { CafeService } from './cafes.service';

@Controller('cafes')
export class CafesController {
  constructor(private readonly cafeService: CafeService) {}

  @Get()
  findAll() {
    return this.cafeService.findAll();
  }

  @Get(':placa_id')
  findOne(@Param('placa_id') placa_id: string, @Query('lang') lang = 'en') {
    return this.cafeService.findOne(placa_id, lang);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cafeService.remove(id);
  }
}