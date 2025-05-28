import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ATM } from './schemas/atm.schema';
import { Model } from 'mongoose';
import { CreateAtmDto } from './dto/atm.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class AtmsService {
  constructor(
    @InjectModel(ATM.name)
    private readonly model: Model<ATM>,
  ) {}

  async create(dto: CreateAtmDto): Promise<ATM> {
    return this.model.create(dto);
  }

  async findAll(): Promise<ATM[]> {
    return this.model.find().populate(['place_id', 'currency_available', 'languages_available']).exec();
  }

  async findOne(id: string, lang = 'en'): Promise<any> {
    const atm = await this.model
    .findById(id)
    .populate([
      {
        path: 'place_id',
        populate: {
          path: 'place_location',
        },
      },
      {
        path: 'currency_available',
      },
      {
        path: 'languages_available',
      }])
    .lean<PopulatedPlaceBase>()
    .exec();

    if (!atm) {
      throw new NotFoundException(`ATM with ID "${id}" not found`);
    }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = atm.place_id

    const translated = {
      ...atm,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },

      currency_available: atm.currency_available?.map(
        (opt) => getTranslation( opt,lang),
      ),
      languages_available: atm.transport_options?.map(
        (opt) => getTranslation(opt,lang),
      ),
    };
    
    return translated;
  }
  

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`ATM with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
