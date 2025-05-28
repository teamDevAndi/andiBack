import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantService: RestaurantsService) {}

  @Get()
  findAll() {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('lang') lang = 'en') {
    return this.restaurantService.findOne(id, lang);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantService.remove(id);
  }
}
