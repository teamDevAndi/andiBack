import { Controller, Get, Delete, Param, Query } from '@nestjs/common';
import { MedicalCentersService } from './medicalcenters.service';

@Controller('medicalcenters')
export class MedicalCentersController {
  constructor(private readonly service: MedicalCentersService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string, @Query('lang') lang = 'en') {
    return this.service.findOne(id, lang);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
