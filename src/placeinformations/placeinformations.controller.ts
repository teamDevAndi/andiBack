import { Controller, Get, Param, Delete } from '@nestjs/common';
import { PlaceInformationService } from './placeinformations.service';

@Controller('placeinformations')
export class PlaceInformationController {
  constructor(private readonly placeInfoService: PlaceInformationService) {}

  @Get()
  findAll() {
    return this.placeInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placeInfoService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placeInfoService.remove(id);
  }
}
