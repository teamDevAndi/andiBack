import { Controller, Get, Delete, Param, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { InfotoursService } from './infotours.service';

@Controller('infotours')
export class InfotoursController {
  constructor(private readonly infotourService: InfotoursService) {}

  @Get()
  findAll() {
    return this.infotourService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('lang') lang = 'en') {
    return this.infotourService.findById(id, lang);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.infotourService.delete(id);
  }
}
