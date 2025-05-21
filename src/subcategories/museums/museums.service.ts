import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Museum } from './schemas/museum.schema';
import { CreateMuseumDto } from './dto/museum.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class MuseumsService {
  constructor(@InjectModel(Museum.name) private museumModel: Model<Museum>) {}

  async create(dto: CreateMuseumDto): Promise<Museum> {
    return this.museumModel.create(dto);
  }

  async findAll(): Promise<Museum[]> {
    return this.museumModel.find().populate(['place_id', 'collection_type']).exec();
  }

  async findOne(id: string, lang = 'en'): Promise<any> {
    const museum = await this.museumModel
    .findById(id)
    .populate([
      {
        path: 'place_id',
        populate: {
          path: 'place_location',
        },
      },
      {
        path: 'collection_type',
      },])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!museum) throw new NotFoundException('Museum not found');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = museum.place_id

    const translated = {
      ...museum,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      
      collection_type: museum.collection_type?.map(
        (opt) => getTranslation( opt,lang),
      ),
      photography_policy: museum.photography_policy?.map(
        (opt) => getTranslation( opt,lang),
      ),
      facilities: museum.facilities?.map(
        (fac) => getTranslation(fac,lang),
      ),
    };

    return translated;
  }


  async remove(id: string): Promise<void> {
    const deleted = await this.museumModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Museum not found');
  }
}
