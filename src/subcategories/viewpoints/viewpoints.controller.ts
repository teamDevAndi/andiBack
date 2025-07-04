import {
  Controller,
  Get,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ViewpointsService } from './viewpoints.service';

@Controller('viewpoints')
export class ViewpointsController {
  constructor(private readonly viewpointsService: ViewpointsService) {}


  @Get()
  async findAll() {
    return this.viewpointsService.findAll();
  }

  @Get(':place_id')
  findOne(@Param('place_id') place_id: string, @Query('lang') lang = 'en') {
    return this.viewpointsService.findOne(place_id, lang);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.viewpointsService.delete(id);
  }
}
