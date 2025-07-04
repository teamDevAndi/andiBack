import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Monument } from './schemas/monument.schema';
import { CreateMonumentDto } from './dto/monument.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class MonumentsService {
  constructor(@InjectModel(Monument.name) private model: Model<Monument>) {}

  create(dto: CreateMonumentDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().populate(['place_id', 'material_used', 'nearby_facilities']).exec();
  }

  async findOne(place_id: string, lang = 'en'): Promise<any> {
    const monument = await this.model
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
        path: 'material_used',
      },
      {
        path: 'nearby_facilities',
      },])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!monument) throw new NotFoundException('Monument not found');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = monument.place_id

    const translated = {
      ...monument,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      material_used: monument.material_used?.map(
        (opt) => getTranslation(opt,lang),
      ),
      nearby_facilities: monument.nearby_facilities?.map(
        (opt) => getTranslation(opt,lang),
      ),
    };

    return translated;
  }
  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Monument not found');
  }
}
