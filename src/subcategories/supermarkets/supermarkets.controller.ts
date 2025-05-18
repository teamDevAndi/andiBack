import { Controller, Get, Delete, Param } from '@nestjs/common';
import { SupermarketsService } from './supermarkets.service';

@Controller('supermarkets')
export class SupermarketsController {
  constructor(private readonly service: SupermarketsService) {}
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
