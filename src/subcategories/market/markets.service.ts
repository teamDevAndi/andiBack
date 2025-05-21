import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Market } from './schemas/market.schema';
import { CreateMarketDto } from './dto/market.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class MarketsService {
  constructor(@InjectModel(Market.name) private model: Model<Market>) {}

  create(dto: CreateMarketDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().populate('place_id market_type');
  }

  async findOne(id: string, lang = 'en'): Promise<any> {

    const market = await this.model
    .findById(id)
    .populate([
      {
        path: 'place_id',
        populate: {
          path: 'place_location',
        },
      },
      {
        path: 'market_type',
      },])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!market) throw new NotFoundException('Market not found');
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

      market_type: market.market_type?.map(
        (opt) => getTranslation( opt,lang),
      ),
      tips: market.tips?.map(
        (opt) => getTranslation(opt,lang),
      ),
    };

    return translated;
  }

  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Market not found');
    return deleted;
  }
}
