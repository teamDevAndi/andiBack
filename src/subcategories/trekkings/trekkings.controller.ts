import { Controller, Get, Delete, Param, Query } from '@nestjs/common';
import { TrekkingsService } from './trekkings.service';

@Controller('trekkings')
export class TrekkingsController {
  constructor(private readonly trekkingsService: TrekkingsService) {}

  @Get()
  async findAll() {
    return this.trekkingsService.findAll();
  }

  @Get(':place_id')
  findOne(@Param('place_id') place_id: string, @Query('lang') lang = 'en') {
    return this.trekkingsService.findOne(place_id, lang);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trekkingsService.delete(id);
  }
}
