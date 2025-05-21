import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Viewpoint } from './interfaces/viewpoint.interface';
import { CreateViewpointDto } from './dto/viewpoint.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class ViewpointsService {
  constructor(
    @InjectModel('Viewpoint') private readonly viewpointModel: Model<Viewpoint>,
  ) {}

  async create(createViewpointDto: CreateViewpointDto): Promise<Viewpoint> {
    const created = new this.viewpointModel(createViewpointDto);
    return created.save();
  }

  async findAll(): Promise<Viewpoint[]> {
    return this.viewpointModel.find()
    .populate(['place_id','view_type'])
    .exec();
  }

  async findOne(id: string, lang = 'en'): Promise<any> {
    const viewpoint = await this.viewpointModel
    .findById(id)
    .populate([
      {
        path: 'place_id',
        populate: {
          path: 'place_location',
        },
      },
      {
        path: 'view_type',
      },
      ])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!viewpoint) {
      throw new NotFoundException(`Viewpoint with ID "${id}" not found`);
    }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = viewpoint.place_id

    const translated = {
      ...viewpoint,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      view_type: viewpoint.view_type?.map((item) =>
        getTranslation(item, lang),
      ),

      tips: viewpoint.tips?.map((tip) => getTranslation(tip, lang)),

    };

    return translated;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.viewpointModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Viewpoint with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
