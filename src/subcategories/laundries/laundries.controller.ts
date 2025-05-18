import { Controller, Get, Param, Delete } from '@nestjs/common';
import { LaundriesService } from './laundries.service';

@Controller('laundries')
export class LaundriesController {
  constructor(private readonly service: LaundriesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
