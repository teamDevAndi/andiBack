import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Airport } from './schemas/airport.schema';
import { Model } from 'mongoose';
import { CreateAirportDto } from './dto/airport.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class AirportsService {
  constructor(
    @InjectModel(Airport.name)
    private readonly model: Model<Airport>,
  ) {}

  async create(dto: CreateAirportDto): Promise<Airport> {
    return this.model.create(dto);
  }

  async findAll(): Promise<Airport[]> {
    return this.model.find().populate(['place_id', 'transport_options', 'facilities']).exec();
    }
  async findOne(id: string, lang = 'en'): Promise<any> {
    const airport = await this.model
      .findById(id)
      .populate(['place_id', 'transport_options', 'facilities'])
      .lean<PopulatedPlaceBase>()
      .exec() ;

    if (!airport) {
      throw new NotFoundException(`Airport with ID "${id}" not found`);
    }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = airport.place_id

    const translated = {
      ...airport,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      transport_options: airport.transport_options?.map(
        (opt) => getTranslation( opt,lang),
      ),
      facilities: airport.facilities?.map(
        (fac) => getTranslation(fac,lang),
      ),
    };

    return translated;
  }


  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Airport with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
