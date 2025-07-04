import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { FoodArea } from './schemas/foodarea.schema';
import { CreateFoodAreaDto } from './dto/foodarea.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';


@Injectable()
export class FoodAreasService {
  constructor(@InjectModel(FoodArea.name) private foodAreaModel: Model<FoodArea>) {}

  async create(dto: CreateFoodAreaDto): Promise<FoodArea> {
    return this.foodAreaModel.create(dto);
  }

  async findAll(): Promise<FoodArea[]> {
    return this.foodAreaModel.find().populate(['place_id','vendor_types']).exec();
  }

  async findOne(place_id: string, lang = 'en'): Promise<any> {
    const found = await this.foodAreaModel
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
        path: 'vendor_types',
      },])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!found) throw new NotFoundException('FoodArea not found');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = found.place_id

    const translated = {
      ...found,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      vendor_types: found.vendor_types?.map(
        (opt) => getTranslation( opt,lang),
      ),
      tips: found.tips?.map(
        (obj) => getTranslation(obj,lang),
      ),
    };
    return translated;
  }


  async remove(id: string): Promise<void> {
    const deleted = await this.foodAreaModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('FoodArea not found');
  }
}
