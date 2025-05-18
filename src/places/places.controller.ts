import {Controller, Get, Param, Delete} from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}
  @Get()
  findAll() {
    return this.placesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placesService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placesService.remove(id);
  }
}
