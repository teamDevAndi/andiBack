import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Square } from './interfaces/square.interface';
import { CreateSquareDto } from './dto/square.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class SquaresService {
  constructor(
    @InjectModel('Square') private readonly squareModel: Model<Square>,
  ) {}

  async create(createSquareDto: CreateSquareDto): Promise<Square> {
    const newSquare = new this.squareModel(createSquareDto);
    return newSquare.save();
  }

  async findAll(): Promise<Square[]> {
    return this.squareModel.find().populate(['place_id', 'attractions', 'nearby_facilities']).exec();
  }

  async findOne(id: string, lang = 'en'): Promise<any> {
    const result = await this.squareModel
    .findById(id)
    .populate([
      {
        path: 'place_id',
        populate: {
          path: 'place_location',
        },
      },
      {
        path: 'attractions',
      },
      {
        path: 'nearby_facilities',
      },])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!result) throw new NotFoundException('Square not found');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = result.place_id

    const translated = {
      ...result,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      attractions: result.attractions?.map((item) =>
        getTranslation(item, lang),
      ),

      tips: result.tips?.map((tip) => getTranslation(tip, lang)),

      nearby_facilities: result.nearby_facilities?.map((fac) => getTranslation(fac, lang)),
    };

    return translated;
  }
  async remove(id: string): Promise<any> {
    return this.squareModel.findByIdAndDelete(id);
  }
}
