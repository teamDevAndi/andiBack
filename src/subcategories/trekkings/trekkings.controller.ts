import { Controller, Get, Delete, Param, Body } from '@nestjs/common';
import { TrekkingsService } from './trekkings.service';

@Controller('trekkings')
export class TrekkingsController {
  constructor(private readonly trekkingsService: TrekkingsService) {}

  @Get()
  findAll() {
    return this.trekkingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trekkingsService.findById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trekkingsService.delete(id);
  }
}
