import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Laundry } from './schemas/laundry.schema';
import { Model } from 'mongoose';
import { CreateLaundryDto } from './dto/laundry.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class LaundriesService {
  constructor(
    @InjectModel(Laundry.name)
    private readonly model: Model<Laundry>,
  ) {}

  async create(dto: CreateLaundryDto): Promise<Laundry> {
    return this.model.create(dto);
  }

  async findAll(): Promise<Laundry[]> {
    return this.model.find().populate(['place_id', 'service_type', 'payment_methods']).lean();
  }

  async findOne(id: string, lang= 'en'): Promise<any> {
    const laundry = await this.model
    .findById(id)
    .populate(['place_id', 'service_type', 'payment_methods'])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!laundry) {
      throw new NotFoundException(`Laundry with ID "${id}" not found`);
    }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = laundry.place_id

    const translated = {
      ...laundry,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },

      service_type: laundry.service_type?.map(
        (opt) => getTranslation( opt,lang),
      ),
      payment_methods: laundry.payment_methods?.map(
        (fac) => getTranslation(fac,lang),
      ),
    };

    return translated;
  }


  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Laundry with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
