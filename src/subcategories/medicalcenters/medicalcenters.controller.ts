import { Controller, Get, Delete, Param } from '@nestjs/common';
import { MedicalCentersService } from './medicalcenters.service';

@Controller('medicalcenters')
export class MedicalCentersController {
  constructor(private readonly service: MedicalCentersService) {}

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
