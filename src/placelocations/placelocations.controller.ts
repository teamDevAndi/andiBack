import { Controller, Get, Body, Param, Delete } from '@nestjs/common';
import { PlaceLocationService } from './placelocations.service';

@Controller('placelocations')
export class PlaceLocationController {
  constructor(private readonly placeLocationService: PlaceLocationService) {}
  @Get()
  findAll() {
    return this.placeLocationService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.placeLocationService.findById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placeLocationService.remove(id);
  }
}
