import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Infotour } from './schemas/infotour.schema';
import { CreateInfotourDto } from './dto/infotour.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class InfotoursService {
  constructor(@InjectModel(Infotour.name) private readonly model: Model<Infotour>) {}

  async create(dto: CreateInfotourDto): Promise<Infotour> {
    return this.model.create(dto);
  }

  async findAll(): Promise<Infotour[]> {
    return this.model.find().populate(['place_id', 'language_support']).exec();
  }
  
  async findById(place_id: string, lang= 'en'): Promise<any> {
    const infotour = await this.model
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
        path: 'language_support',
      },])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!infotour) {
      throw new NotFoundException(`Infotour with ID "${place_id}" not found`);
    }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = infotour.place_id

    const translated = {
      ...infotour,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      language_support: infotour.language_support?.map(
        (opt) => getTranslation( opt,lang),
      ),
    };

    return translated;
  }
  
  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Infotour with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
