import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UniqueStore } from './schemas/uniquestore.schema';
import { CreateUniqueStoreDto } from './dto/uniquestore.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class UniqueStoresService {
  constructor(@InjectModel(UniqueStore.name) private model: Model<UniqueStore>) {}

  create(dto: CreateUniqueStoreDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().populate('place_id specialization exclusive_items');
  }

  async findOne(place_id: string, lang = 'en'): Promise<any> {
    const store = await this.model
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
        path: 'specialization',
      },
      {
        path: 'exclusive_items',
      },
      ])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!store) throw new NotFoundException('Unique store not found');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = store.place_id

    const translated = {
      ...store,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      specialization: store.specialization?.map((item) =>
        getTranslation(item, lang),
      ),

      exclusive_items: store.exclusive_items?.map((tip) => getTranslation(tip, lang)),

    };

    return translated;
  }

  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Unique store not found');
    return deleted;
  }
}
