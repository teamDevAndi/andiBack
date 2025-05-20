import {
  Controller,
  Get,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { LakesService } from './lakes.service';

@Controller('lakes')
export class LakesController {
  constructor(private readonly lakesService: LakesService) {}


  @Get()
  async findAll() {
    return this.lakesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('lang') lang = 'en') {
    return this.lakesService.findOne(id, lang);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.lakesService.delete(id);
  }
}
