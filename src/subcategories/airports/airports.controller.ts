import { Controller, Get, Param, Delete } from '@nestjs/common';
import { AirportsService } from './airports.service';

@Controller('airports')
export class AirportsController {
  constructor(private readonly service: AirportsService) {}

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
