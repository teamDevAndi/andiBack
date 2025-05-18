import { Controller, Get, Delete, Param, Body } from '@nestjs/common';
import { TheatersService } from './theaters.service';

@Controller('theaters')
export class TheatersController {
  constructor(private readonly service: TheatersService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
