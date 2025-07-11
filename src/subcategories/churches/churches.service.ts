import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Church } from './interfaces/church.interface';
import { CreateChurchDto } from './dto/church.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class ChurchesService {
  constructor(
    @InjectModel('Church') private readonly churchModel: Model<Church>,
  ) {}

  async create(createChurchDto: CreateChurchDto): Promise<Church> {
    const created = new this.churchModel(createChurchDto);
    return created.save();
  }

  async findAll(): Promise<Church[]> {
    return this.churchModel
    .find()
    .populate(['place_id', 'denomination','architectural_style','facilities','nearby_facilities'])
    .exec();
  }

  async findOne(place_id: string, lang = 'en'): Promise<any> {
    const church = await this.churchModel
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
      {path: 'denomination',},{path: 'architectural_style',},{path: 'facilities',},{path: 'nearby_facilities',}])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!church) {
      throw new NotFoundException(`Church with ID "${place_id}" not found`);
    }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = church.place_id
    const translated = {
      ...church,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },

      facilities: church.facilities?.map(
        (fac) => getTranslation(fac,lang),
      ),
      nearby_facilities: church.nearby_facilities?.map(
        (obj) => getTranslation(obj,lang),
      ),
      architectural_style: church.architectural_style?.map(
        (obj) => getTranslation(obj,lang),
      ),
      denomination: church.denomination?.map(
        (obj) => getTranslation(obj,lang),
      ),
      photography_policy: getTranslation( church.photography_policy ?? {},lang),
    };

    return translated;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.churchModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Church with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
