import { Controller, Get, Param, Delete } from '@nestjs/common';
import { AtmsService } from './atms.service';

@Controller('atms')
export class AtmsController {
  constructor(private readonly service: AtmsService) {}

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
