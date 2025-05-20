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

  @Get(':id')
  findOne(@Param('id') id: string, @Query('lang') lang = 'en') {
    return this.viewpointsService.findOne(id, lang);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.viewpointsService.delete(id);
  }
}
