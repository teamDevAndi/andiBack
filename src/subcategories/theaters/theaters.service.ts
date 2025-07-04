import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Theater } from './schemas/theater.schema';
import { CreateTheaterDto } from './dto/theater.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class TheatersService {
  constructor(@InjectModel(Theater.name) private theaterModel: Model<Theater>) {}

  async create(dto: CreateTheaterDto): Promise<Theater> {
    return this.theaterModel.create(dto);
  }

  async findAll(): Promise<Theater[]> {
    return this.theaterModel.find().populate('place_id');
  }

  async findOne(place_id: string, lang = 'en'): Promise<any> {
    const theater = await this.theaterModel
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
    ])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!theater) throw new NotFoundException('Theater not found');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = theater.place_id
    const translated = {
      ...theater,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
    }
    return translated;
  }

  async remove(id: string): Promise<void> {
    const deleted = await this.theaterModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Theater not found');
  }
}
