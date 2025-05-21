import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Parking } from './schemas/parking.schema';
import { Model } from 'mongoose';
import { CreateParkingDto } from './dto/parking.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class ParkingsService {
  constructor(
    @InjectModel(Parking.name)
    private readonly model: Model<Parking>,
  ) {}

  async create(dto: CreateParkingDto): Promise<Parking> {
    return this.model.create(dto);
  }

  async findAll(): Promise<Parking[]> {
    return this.model.find().populate(['place_id', 'parking_type', 'payment_methods', 'security_features', 'vehicle_types_allowed']).exec();
  }

  async findOne(id: string, lang = 'en'): Promise<any> {
    const parking = await this.model
    .findById(id)
    .populate([
      {
        path: 'place_id',
        populate: {
          path: 'place_location',
        },
      },
      { path: 'parking_type',},
      { path: 'payment_methods',},
      { path: 'security_features',},
      { path: 'vehicle_types_allowed',},])
    .lean<PopulatedPlaceBase>()
    .exec();

    if (!parking) {
      throw new NotFoundException(`Parking with ID "${id}" not found`);
    }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = parking.place_id

    const translated = {
      ...parking,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      
      parking_type: parking.parking_type?.map(
        (opt) => getTranslation( opt,lang),
      ),
      security_features: parking.security_features?.map(
        (opt) => getTranslation( opt,lang),
      ),
      vehicle_types_allowed: parking.vehicle_types_allowed?.map(
        (opt) => getTranslation( opt,lang),
      ),
      payment_methods: parking.payment_methods?.map(
        (opt) => getTranslation( opt,lang),
      ),
    };

    return translated;
  }


  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Parking with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
