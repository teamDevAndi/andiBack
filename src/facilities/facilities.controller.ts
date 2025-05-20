import { Controller, Query, Get, Param, Delete } from '@nestjs/common';
import { FacilitiesService } from './facilities.service';


@Controller('facilities')
export class FacilitiesController {
  constructor(private readonly facilitiesService: FacilitiesService) {}


  @Get()
  findAll() {
    return this.facilitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('lang') lang = 'en') {
    return this.facilitiesService.findOne(id, lang);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.facilitiesService.delete(id);
  }
}
