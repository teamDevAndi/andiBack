import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BusTerminal } from './schemas/busterminal.schema';
import { Model } from 'mongoose';
import { CreateBusTerminalDto } from './dto/busterminal.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';


@Injectable()
export class BusTerminalsService {
  constructor(
    @InjectModel(BusTerminal.name)
    private readonly model: Model<BusTerminal>,
  ) {}

  async create(dto: CreateBusTerminalDto): Promise<BusTerminal> {
    return this.model.create(dto);
  }

  async findAll(): Promise<BusTerminal[]> {
    return this.model.find().populate(['place_id', 'facilities']).exec();
  }

  async findOne(id: string, lang = 'en'): Promise<any> {
    const busTerminal = await this.model
    .findById(id)
    .populate([
      {
        path: 'place_id',
        populate: {
          path: 'place_location',
        },
      },
      {
        path: 'facilities',
      }])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!busTerminal) {
      throw new NotFoundException(`BusTerminal with ID "${id}" not found`);
    }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = busTerminal.place_id

    const translated = {
      ...busTerminal,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      facilities: busTerminal.facilities?.map((fac) => getTranslation(fac, lang)),
    };

    return translated;
  }
  

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`BusTerminal with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
