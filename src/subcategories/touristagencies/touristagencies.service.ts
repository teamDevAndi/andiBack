import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TouristAgency } from './schemas/touristagency.schema';
import { Model } from 'mongoose';
import { CreateTouristAgencyDto } from './dto/touristagency.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class TouristAgenciesService {
  constructor(
    @InjectModel(TouristAgency.name)
    private readonly model: Model<TouristAgency>,
  ) {}

  async create(dto: CreateTouristAgencyDto): Promise<TouristAgency> {
    return this.model.create(dto);
  }

  async findAll(): Promise<TouristAgency[]> {
    return this.model.find().populate(['place_id', 'tour_types', 'languages_offered', 'certifications', 'payment_methods',]).exec();
  }

  async findOne(id: string, lang = 'en'): Promise<any> {
    const touristAgency = await this.model
    .findById(id)
    .populate([
      {
        path: 'place_id',
        populate: {
          path: 'place_location',
        },
      },
      {path: 'tour_types',},
      {path: 'languages_offered',},
      {path: 'certifications',},
      {path: 'payment_methods',},])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!touristAgency) {
      throw new NotFoundException(`TouristAgency with ID "${id}" not found`);
    }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = touristAgency.place_id

    const translated = {
      ...touristAgency,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      tour_types: touristAgency.tour_types?.map((item) =>
        getTranslation(item, lang),
      ),
      languages_offered: touristAgency.languages_offered?.map((tip) => getTranslation(tip, lang)),
      certifications: touristAgency.certifications?.map((tip) => getTranslation(tip, lang)),
      payment_methods: touristAgency.payment_methods?.map((tip) => getTranslation(tip, lang)),

    };

    return translated;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`TouristAgency with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
