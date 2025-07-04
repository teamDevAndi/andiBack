import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Park } from './interfaces/park.interface';
import { CreateParkDto } from './dto/park.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class ParksService {
  constructor(@InjectModel('Park') private readonly parkModel: Model<Park>) {}

  async create(createParkDto: CreateParkDto): Promise<Park> {
    const created = new this.parkModel(createParkDto);
    return created.save();
  }

  async findAll(): Promise<Park[]> {
    return this.parkModel
      .find()
      .populate(['place_id', 'flora_fauna_highlights', 'facilities'])
      .exec();
  }

  async findOne(place_id: string, lang = 'en'): Promise<any> {
    const park = await this.parkModel
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
          path: 'flora_fauna_highlights',
        },
        {
          path: 'facilities',
        },])
      .lean<PopulatedPlaceBase>()
      .exec();

    if (!park) {
      throw new NotFoundException(`Park with ID "${place_id}" not found`);
    }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = park.place_id

    const translated = {
      ...park,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      flora_fauna_highlights: park.flora_fauna_highlights?.map((item) =>
        getTranslation(item, lang),
      ),

      tips: park.tips?.map((tip) => getTranslation(tip, lang)),

      facilities: park.facilities?.map((fac) => getTranslation(fac, lang)),
    };

    return translated;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.parkModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Park with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
