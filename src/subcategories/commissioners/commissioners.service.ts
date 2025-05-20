import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Commissioner } from './schemas/commissioner.schema';
import { CreateCommissionerDto } from './dto/commissioner.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';


@Injectable()
export class CommissionersService {
  constructor(
    @InjectModel(Commissioner.name) private readonly model: Model<Commissioner>,
  ) {}

  async create(dto: CreateCommissionerDto): Promise<Commissioner> {
    return this.model.create(dto);
  }

  async findAll(): Promise<Commissioner[]> {
    return this.model.find().populate(['place_id', 'language_support']).exec();
  }

  async findOne(id: string, lang= 'en'): Promise<any> {
    const commissioner = await this.model
    .findById(id)
    .populate(['place_id', 'language_support'])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!commissioner) {
      throw new NotFoundException(`Commissioner with ID "${id}" not found`);
    }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = commissioner.place_id

    const translated = {
      ...commissioner,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },

      language_support: commissioner.language_support?.map(
        (obj) => getTranslation(obj,lang),
      ),
    };

    return translated;
  }
  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Commissioner with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
