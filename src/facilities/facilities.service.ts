import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Facility } from './interfaces/facility.interface';
import { CreateFacilityDto } from './dto/facility.dto';

@Injectable()
export class FacilitiesService {
  constructor(@InjectModel('Facility') private facilityModel: Model<Facility>) {}

  async create(dto: CreateFacilityDto): Promise<Facility> {
    const facility = new this.facilityModel(dto);
    return facility.save();
  }

  async findAll(): Promise<Facility[]> {
    return this.facilityModel.find().exec();
  }

  async findById(id: string): Promise<Facility> {
    const facility = await this.facilityModel.findById(id).exec();
    if (!facility) throw new NotFoundException(`Facility with ID "${id}" not found`);
    return facility;
  }

  async delete(id: string): Promise<void> {
    await this.facilityModel.findByIdAndDelete(id);
  }
}
