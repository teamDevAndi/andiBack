import { Controller, Get, Body, Param, Delete, Query } from '@nestjs/common';
import { SquaresService } from './squares.service';

@Controller('squares')
export class SquaresController {
  constructor(private readonly squaresService: SquaresService) {}

  @Get()
  findAll() {
    return this.squaresService.findAll();
  }

  @Get(':place_id')
  findOne(@Param('place_id') place_id: string, @Query('lang') lang = 'en') {
    return this.squaresService.findOne(place_id, lang);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.squaresService.remove(id);
  }
}
