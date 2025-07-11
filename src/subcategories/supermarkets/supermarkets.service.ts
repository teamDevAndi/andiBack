import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Supermarket } from './schemas/supermarket.schema';
import { CreateSupermarketDto } from './dto/supermarket.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class SupermarketsService {
  constructor(@InjectModel(Supermarket.name) private model: Model<Supermarket>) {}

  create(dto: CreateSupermarketDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().populate(['place_id', 'product_categories', 'payment_methods']);
  }

  async findOne(place_id: string, lang = 'en'): Promise<any> {
    const market = await this.model
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
        path: 'product_categories',
      },
      {
        path: 'payment_methods',
      },])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!market) throw new NotFoundException('Supermarket not found');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = market.place_id

    const translated = {
      ...market,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      product_categories: market.product_categories?.map((item) =>
        getTranslation(item, lang),
      ),

      payment_methods: market.payment_methods?.map((tip) => getTranslation(tip, lang)),

    };

    return translated;
  }

  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Supermarket not found');
    return deleted;
  }
}
