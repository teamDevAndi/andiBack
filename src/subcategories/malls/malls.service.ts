import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mall } from './schemas/mall.schema';
import { Model } from 'mongoose';
import { CreateMallDto } from './dto/mall.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class MallsService {
  constructor(@InjectModel(Mall.name) private model: Model<Mall>) {}

  create(dto: CreateMallDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().populate(['place_id', 'store_types', 'entertainment_area']).exec();
  }

  async findOne(id: string, lang = 'en'): Promise<any> {
    const mall = await this.model
    .findById(id)
    .populate([
      {
        path: 'place_id',
        populate: {
          path: 'place_location',
        },
      },
      {
        path: 'store_types',
      },
      {
        path: 'entertainment_area',
      },])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!mall) throw new NotFoundException('Mall not found');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = mall.place_id

    const translated = {
      ...mall,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },

      store_types: mall.store_types?.map(
        (opt) => getTranslation( opt,lang),
      ),
      entertainment_area: mall.entertainment_area?.map(
        (fac) => getTranslation(fac,lang),
      ),
    };

    return translated;
  }
  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Mall not found');
    return deleted;
  }
}
