import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { SportArea } from './interfaces/sportarea.interface';
import { CreateSportAreaDto } from './dto/sportarea.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class SportAreasService {
  constructor(@InjectModel('SportArea') private readonly model: Model<SportArea>) {}

  create(data: CreateSportAreaDto) {
    return new this.model(data).save();
  }

  async findAll(): Promise<SportArea[]>{
    return this.model.find().populate(['place_id', 'sports_available', 'surface_type', 'facilities']).exec();
  }

  async findOne(place_id: string, lang = 'en'): Promise<any> {
    const result = await this.model
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
        path: 'sports_available',
      },
      {
        path: 'surface_type',
      },
      {
        path: 'facilities',
      },])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!result) throw new NotFoundException('Sport Area not found');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = result.place_id

    const translated = {
      ...result,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      surface_type: result.surface_type?.map((item) =>
        getTranslation(item, lang),
      ),
      sports_available: result.sports_available?.map((item) =>
        getTranslation(item, lang),
      ),
      tips: result.tips?.map((tip) => getTranslation(tip, lang)),

      facilities: result.facilities?.map((fac) => getTranslation(fac, lang)),
    };

    return translated;
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}