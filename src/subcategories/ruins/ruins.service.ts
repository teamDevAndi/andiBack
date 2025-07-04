import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Ruin } from './schemas/ruin.schema';
import { CreateRuinDto } from './dto/ruin.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class RuinsService {
  constructor(@InjectModel(Ruin.name) private ruinModel: Model<Ruin>) {}

  async create(dto: CreateRuinDto): Promise<Ruin> {
    return this.ruinModel.create(dto);
  }

  async findAll(): Promise<Ruin[]> {
    return this.ruinModel.find().populate('place_id historical_period');
  }

  async findOne(place_id: string, lang = 'en'): Promise<any> {

    const ruin = await this.ruinModel
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
        path: 'historical_period',
      },])
    .lean<PopulatedPlaceBase>()
    .exec()

    if (!ruin) throw new NotFoundException('Ruin not found');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = ruin.place_id

    const translated = {
      ...ruin,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      historical_period: ruin.historical_period?.map((item) =>
        getTranslation(item, lang),
      ),
      photography_policy: getTranslation(ruin.photography_policy ?? {},lang),

      nearby_facilities: ruin.nearby_facilities?.map((fac) => getTranslation(fac, lang)),
    };

    return translated;
  }
  async remove(id: string): Promise<void> {
    const deleted = await this.ruinModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Ruin not found');
  }
}
