import { Controller, Body, Get, Param, Delete } from '@nestjs/common';
import { FacilitiesService } from './facilities.service';


@Controller('facilities')
export class FacilitiesController {
  constructor(private readonly facilitiesService: FacilitiesService) {}


  @Get()
  findAll() {
    return this.facilitiesService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.facilitiesService.findById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.facilitiesService.delete(id);
  }
}
