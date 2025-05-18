import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Airport } from './schemas/airport.schema';
import { Model } from 'mongoose';
import { CreateAirportDto } from './dto/airport.dto';

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
  async findById(id: string): Promise<Airport> {
    const airport = await this.model.findById(id)
    .populate(['place_id', 'transport_options', 'facilities']).exec();
    if (!airport) {
      throw new NotFoundException(`Airport with ID "${id}" not found`);
    }
    return airport;
  }
  

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Airport with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
