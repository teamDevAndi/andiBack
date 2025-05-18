import {
  Controller,
  Get,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
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
  async findOne(@Param('id') id: string) {
    return this.lakesService.findById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.lakesService.delete(id);
  }
}
