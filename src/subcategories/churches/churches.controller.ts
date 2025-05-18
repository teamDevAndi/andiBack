import {
  Controller,
  Get,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
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
  async findOne(@Param('id') id: string) {
    return this.churchesService.findById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.churchesService.delete(id);
  }
}
