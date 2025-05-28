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

  async findOne(id: string, lang = 'en'): Promise<any> {
    const facility = await this.facilityModel.findById(id).lean<Facility>().exec();
    if (!facility) throw new NotFoundException(`Facility with ID "${id}" not found`);
    const name = facility.name as Record<string, string>;
    const nameF = name[lang] || name['en'] || '';
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { name: _, ...facilityWithoutDescriptions } = facility;
        return {
          ...facilityWithoutDescriptions,
          nameF,
        };

  }

  async delete(id: string): Promise<void> {
    await this.facilityModel.findByIdAndDelete(id);
  }
}
