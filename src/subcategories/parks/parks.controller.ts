import {
  Controller,
  Get,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
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
  async findOne(@Param('id') id: string) {
    return this.parksService.findById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.parksService.delete(id);
  }
}
