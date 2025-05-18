import {
  Controller,
  Get,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
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
  async findOne(@Param('id') id: string) {
    return this.viewpointsService.findById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.viewpointsService.delete(id);
  }
}
