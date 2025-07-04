import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Hotel } from './schemas/hotel.schema';
import { CreateHotelDto } from './dto/hotel.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class HotelsService {
  constructor(@InjectModel(Hotel.name) private readonly model: Model<Hotel>) {}

  async create(dto: CreateHotelDto): Promise<Hotel> {
    return this.model.create(dto);
  }

  async findAll(): Promise<Hotel[]> {
    return this.model.find().populate(['place_id', 'room_types', 'amenities', 'language_support']).exec();
  }

  async findOne(place_id: string, lang= 'en'): Promise<any> {
    const hotel = await this.model
    .findOne(
        { place_id: new Types.ObjectId(place_id) }
    )
    .populate([
      {
        path: 'place_id',
        populate: {
          path: 'place_location',
        },
      },
      {
        path: 'room_types',
      },
      {
        path: 'amenities',
      },
      {
        path: 'language_support',
      },])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!hotel) {
      throw new NotFoundException(`Hotel with ID "${place_id}" not found`);
    }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = hotel.place_id

    const translated = {
      ...hotel,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      room_types: hotel.room_types?.map(
        (opt) => getTranslation( opt,lang),
      ),
      amenities: hotel.amenities?.map(
        (opt) => getTranslation( opt,lang),
      ),
      language_support: hotel.language_support?.map(
        (opt) => getTranslation( opt,lang),
      ),
    };

    return translated;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Hotel with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
