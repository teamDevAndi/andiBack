import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { Restaurant, RestaurantSchema } from './schemas/restaurant.schema';
import { CuisineType, CuisineTypeSchema } from './schemas/cuisine_type.schema';
import { DietaryOptions, DietaryOptionsSchema } from './schemas/dietary_options.schema';
import { SpecialDishes, SpecialDishesSchema } from './schemas/special_dishes.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Restaurant.name, schema: RestaurantSchema },
    { name: CuisineType.name, schema: CuisineTypeSchema },
    { name: DietaryOptions.name, schema: DietaryOptionsSchema },
    { name: SpecialDishes.name, schema: SpecialDishesSchema },
    { name: Place.name, schema: PlaceSchema },

  ])],
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
})
export class RestaurantsModule {}
