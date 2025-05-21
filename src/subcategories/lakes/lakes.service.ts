import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lake } from './interfaces/lake.interface';
import { CreateLakeDto } from './dto/lake.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class LakesService {
  constructor(
    @InjectModel('Lake') private readonly lakeModel: Model<Lake>,
  ) {}

  async create(createLakechDto: CreateLakeDto): Promise<Lake> {
    const created = new this.lakeModel(createLakechDto);
    return created.save();
  }

  async findAll(): Promise<Lake[]> {
    return this.lakeModel.find()
    .populate(['place_id', 'water_type','activities_allowed', 'flora_fauna_highlights', 'facilities'])
    .exec();
  }

  async findOne(id: string, lang = 'en'): Promise<any> {
    const lake = await this.lakeModel
    .findById(id)
    .populate([
      {
        path: 'place_id',
        populate: {
          path: 'place_location',
        },
      },
      { path: 'water_type',}, { path: 'activities_allowed',},{ path: 'flora_fauna_highlights'},{path: 'facilities',},])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!lake) {
      throw new NotFoundException(`Lake with ID "${id}" not found`);
    }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = lake.place_id

    const translated = {
      ...lake,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      water_type: lake.water_type?.map(
        (opt) => getTranslation( opt,lang),
      ),
      facilities: lake.facilities?.map(
        (fac) => getTranslation(fac,lang),
      ),
      activities_allowed: lake.activities_allowed?.map(
        (fac) => getTranslation(fac,lang),
      ),
      flora_fauna_highlights: lake.flora_fauna_highlights?.map(
        (fac) => getTranslation(fac,lang),
      ),
      safety_information: lake.safety_information?.map(
        (fac) => getTranslation(fac,lang),
      ),
      tips: lake.tips?.map(
        (fac) => getTranslation(fac,lang),
      ),
    };

    return translated;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.lakeModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Lake with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
