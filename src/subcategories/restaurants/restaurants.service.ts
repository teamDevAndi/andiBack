import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from './schemas/restaurant.schema';
import { CreateRestaurantDto } from './dto/restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>) {}

  async create(dto: CreateRestaurantDto): Promise<Restaurant> {
    return this.restaurantModel.create(dto);
  }

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find().populate(['place_id', 'cuisine_type', 'dietary_options']).exec();
  }

  async findOne(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(id).populate(['place_id', 'cuisine_type', 'dietary_options']).exec();
    if (!restaurant) throw new NotFoundException('Restaurant not found');
    return restaurant;
  }


  async remove(id: string): Promise<void> {
    const result = await this.restaurantModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Restaurant not found');
  }
}
