import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TransportStop } from './schemas/transportstop.schema';
import { Model, Types } from 'mongoose';
import { CreateTransportStopDto } from './dto/transportstop.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class TransportStopsService {
  constructor(
    @InjectModel(TransportStop.name)
    private readonly model: Model<TransportStop>,
  ) {}

  async create(dto: CreateTransportStopDto): Promise<TransportStop> {
    return this.model.create(dto);
  }

  async findAll(): Promise<TransportStop[]> {
    return this.model.find().populate(['place_id', 'transport_type', 'lines_available']).exec();
  }
  
  async findOne(place_id: string, lang = 'en'): Promise<any> {
    const transportStop = await this.model
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
        path: 'transport_type',
      },
      {
        path: 'lines_available',
      },])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!transportStop) {
      throw new NotFoundException(`TransportStop with ID "${place_id}" not found`);
    }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = transportStop.place_id

    const translated = {
      ...transportStop,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      transport_type: transportStop.transport_type?.map((item) =>
        getTranslation(item, lang),
      ),
      lines_available: transportStop.lines_available?.map((tip) => getTranslation(tip, lang)),
    };

    return translated;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`TransportStop with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
