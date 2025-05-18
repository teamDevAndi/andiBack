import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Parking } from './schemas/parking.schema';
import { Model } from 'mongoose';
import { CreateParkingDto } from './dto/parking.dto';

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

  async findById(id: string): Promise<Parking> {
    const parking = await this.model.findById(id)
    .populate(['place_id', 'parking_type', 'payment_methods', 'security_features', 'vehicle_types_allowed']).exec();
    if (!parking) {
      throw new NotFoundException(`Parking with ID "${id}" not found`);
    }
    return parking;
  }
  

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Parking with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
