import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Trekking } from './interfaces/trekking.interface';
import { CreateTrekkingDto } from './dto/trekking.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class TrekkingsService {
  constructor(
    @InjectModel('Trekking') private readonly trekkingModel: Model<Trekking>,
  ) {}

  async create(createTrekkingDto: CreateTrekkingDto): Promise<Trekking> {
    const newTrekking = new this.trekkingModel(createTrekkingDto);
    return newTrekking.save();
  }

  async findAll(): Promise<Trekking[]> {
    return this.trekkingModel
      .find()
      .populate(['place_id', 'equipment_required'])
      .exec();
  }

  async findOne(id: string, lang = 'en'): Promise<any> {
    const trekking = await this.trekkingModel
      .findById(id)
      .populate(['place_id', 'equipment_required'])
      .lean<PopulatedPlaceBase>()
      .exec();

    if (!trekking) {
      throw new NotFoundException(`Trekking with ID "${id}" not found`);
    }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = trekking.place_id

    const translated = {
      ...trekking,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      flora_fauna_highlights: trekking.flora_fauna_highlights?.map((item) =>
        getTranslation(item, lang),
      ),
      equipment_required: trekking.equipment_required?.map((tip) => getTranslation(tip, lang)),
      tips: trekking.tips?.map((tip) => getTranslation(tip, lang)),


    };

    return translated;
  }

  async delete(id: string): Promise<void> {
    const result = await this.trekkingModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Trekking with ID "${id}" not found`);
    }
  }
}
