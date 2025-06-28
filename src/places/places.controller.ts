import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { PlacesService } from './places.service';


@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}


  @Get()
  findAll(
    @Query('lang') lang = 'en',
    @Query('categories') categories?: string,
    ) {
      const categoriesArray = categories ? categories.split(',') : undefined;

      return this.placesService.findAll(lang, categoriesArray);
    }


  @Get(':id')
  findOne(@Param('id') id: string, @Query('lang') lang = 'en') {
    return this.placesService.findOne(id, lang);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placesService.remove(id);
  }
}
