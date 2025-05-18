import { Controller, Get, Param, Delete } from '@nestjs/common';
import { TransportStopsService } from './transportstops.service';

@Controller('transportstops')
export class TransportStopsController {
  constructor(private readonly service: TransportStopsService) {}

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
