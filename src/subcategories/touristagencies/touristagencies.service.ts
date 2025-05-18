import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TouristAgency } from './schemas/touristagency.schema';
import { Model } from 'mongoose';
import { CreateTouristAgencyDto } from './dto/touristagency.dto';

@Injectable()
export class TouristAgenciesService {
  constructor(
    @InjectModel(TouristAgency.name)
    private readonly model: Model<TouristAgency>,
  ) {}

  async create(dto: CreateTouristAgencyDto): Promise<TouristAgency> {
    return this.model.create(dto);
  }

  async findAll(): Promise<TouristAgency[]> {
    return this.model.find().populate(['place_id', 'tour_types', 'languages_offered', 'certifications', 'payment_methods',]).exec();
  }

  async findById(id: string): Promise<TouristAgency> {
    const touristAgency = await this.model.findById(id)
    .populate(['place_id', 'tour_types', 'languages_offered', 'certifications', 'payment_methods',]).exec();
    if (!touristAgency) {
      throw new NotFoundException(`TouristAgency with ID "${id}" not found`);
    }
    return touristAgency;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`TouristAgency with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
