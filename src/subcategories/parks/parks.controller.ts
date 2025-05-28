import {
  Controller,
  Get,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ParksService } from './parks.service';

@Controller('parks')
export class ParksController {
  constructor(private readonly parksService: ParksService) {}


  @Get()
  async findAll() {
    return this.parksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('lang') lang = 'en') {
    return this.parksService.findOne(id, lang);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.parksService.delete(id);
  }
}
