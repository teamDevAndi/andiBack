import {
  Controller,
  Get,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ChurchesService } from './churches.service';

@Controller('churches')
export class ChurchesController {
  constructor(private readonly churchesService: ChurchesService) {}


  @Get()
  async findAll() {
    return this.churchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('lang') lang = 'en') {
    return this.churchesService.findOne(id, lang);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.churchesService.delete(id);
  }
}
