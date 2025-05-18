import { Controller, Get, Param, Delete } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantService: RestaurantsService) {}

  @Get()
  findAll() {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantService.remove(id);
  }
}
