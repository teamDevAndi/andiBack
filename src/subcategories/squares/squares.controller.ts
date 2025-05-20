import { Controller, Get, Body, Param, Delete, Query } from '@nestjs/common';
import { SquaresService } from './squares.service';

@Controller('squares')
export class SquaresController {
  constructor(private readonly squaresService: SquaresService) {}

  @Get()
  findAll() {
    return this.squaresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('lang') lang = 'en') {
    return this.squaresService.findOne(id, lang);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.squaresService.remove(id);
  }
}
