import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Place } from './interfaces/place.interface';
import { CreatePlaceDto } from './dto/place.dto';

@Injectable()
export class PlacesService {
  constructor(
    @InjectModel('Place') private readonly placeModel: Model<Place>,
  ) {}

  async create(createPlaceDto: CreatePlaceDto): Promise<Place> {
    const newPlace = new this.placeModel(createPlaceDto);
    return await newPlace.save();
  }
  async findAll(lang = 'en', categories?: string[]): Promise<any[]> {
    const filter: Record<string, unknown> = {};
    if (categories?.length) {
      filter['category'] = { $in: categories };
    }

    const places: Place[] = await this.placeModel.find(filter).lean().exec();

    return places.map((place: Place) => {
      const description_place = place.description_place as Record<string, string> | undefined;
      const description = description_place?.[lang] || description_place?.['en'] || '';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { description_place: _, ...placeWithoutDescriptions } = place;

      return {
        ...placeWithoutDescriptions,
        description,
      };
    });
  }

  async findOne(id: string, lang = 'en'): Promise<any> {
    const place = await this.placeModel.findById(id).populate('place_location').lean<Place>().exec();

    if (!place) {
      throw new NotFoundException(`Lugar con ID ${id} no encontrado`);
    }

    const description_place = place.description_place as Record<string, string>;
    
    const description = description_place[lang] || description_place['en'] || '';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place: _, ...placeWithoutDescriptions } = place;

    return {
      ...placeWithoutDescriptions,
      description,
    };
  }


  async remove(id: string): Promise<void> {
    const result = await this.placeModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Lugar con ID ${id} no encontrado`);
    }
  }
}
