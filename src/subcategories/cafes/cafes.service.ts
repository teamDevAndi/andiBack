import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cafe } from './schemas/cafe.schema';
import { CreateCafeDto } from './dto/cafe.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class CafeService {
  constructor(@InjectModel(Cafe.name) private cafeModel: Model<Cafe>) {}

  async create(dto: CreateCafeDto): Promise<Cafe> {
    return this.cafeModel.create(dto);
  }

  async findAll(): Promise<Cafe[]> {
    return this.cafeModel.find().populate('place_id').exec();
  }
  async findOne(place_id: string, lang = 'en'): Promise<any> {
    const cafe = await this.cafeModel
    .findOne(
      { place_id: new Types.ObjectId(place_id) }
    )
    .lean<PopulatedPlaceBase>()
    .populate([
      {
        path: 'place_id',
        populate: {
          path: 'place_location',
        },
      },])
    .exec();
    if (!cafe) throw new NotFoundException('Cafe not found');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = cafe.place_id

    const translated = {
      ...cafe,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
    };

    return translated;
  }



  async remove(id: string): Promise<void> {
    const result = await this.cafeModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Restaurant not found');
  }
}