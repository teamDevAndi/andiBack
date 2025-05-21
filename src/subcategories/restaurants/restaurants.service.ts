import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from './schemas/restaurant.schema';
import { CreateRestaurantDto } from './dto/restaurant.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class RestaurantsService {
  constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>) {}

  async create(dto: CreateRestaurantDto): Promise<Restaurant> {
    return this.restaurantModel.create(dto);
  }

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find().populate(['place_id', 'cuisine_type', 'dietary_options']).exec();
  }

  async findOne(id: string, lang = 'en'): Promise<any> {
    const restaurant = await this.restaurantModel
    .findById(id)
    .populate([
      {
        path: 'place_id',
        populate: {
          path: 'place_location',
        },
      },
      {
        path: 'cuisine_type',
      },
      {
        path: 'dietary_options',
      },])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!restaurant) throw new NotFoundException('Restaurant not found');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = restaurant.place_id

    const translated = {
      ...restaurant,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      cuisine_type: restaurant.cuisine_type?.map((item) =>
        getTranslation(item, lang),
      ),
      dietary_options: restaurant.dietary_options?.map((item) =>
        getTranslation(item, lang),
      ),
      special_dishes: restaurant.special_dishes?.map((item) =>
        getTranslation(item, lang),
      ),
    };

    return translated;
  }


  async remove(id: string): Promise<void> {
    const result = await this.restaurantModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Restaurant not found');
  }
}
