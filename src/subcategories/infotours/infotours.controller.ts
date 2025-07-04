import { Controller, Get, Delete, Param, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { InfotoursService } from './infotours.service';

@Controller('infotours')
export class InfotoursController {
  constructor(private readonly infotourService: InfotoursService) {}

  @Get()
  findAll() {
    return this.infotourService.findAll();
  }

  @Get(':place_id')
  findOne(@Param('place_id') place_id: string, @Query('lang') lang = 'en') {
    return this.infotourService.findById(place_id, lang);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.infotourService.delete(id);
  }
}
