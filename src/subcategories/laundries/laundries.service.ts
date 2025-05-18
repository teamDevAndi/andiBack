import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Laundry } from './schemas/laundry.schema';
import { Model } from 'mongoose';
import { CreateLaundryDto } from './dto/laundry.dto';

@Injectable()
export class LaundriesService {
  constructor(
    @InjectModel(Laundry.name)
    private readonly model: Model<Laundry>,
  ) {}

  async create(dto: CreateLaundryDto): Promise<Laundry> {
    return this.model.create(dto);
  }

  async findAll(): Promise<Laundry[]> {
    return this.model.find().populate(['place_id', 'service_type', 'payment_methods']).exec();
  }

  async findById(id: string): Promise<Laundry> {
    const laundry = await this.model.findById(id)
    .populate(['place_id', 'service_type', 'payment_methods']).exec();
    if (!laundry) {
      throw new NotFoundException(`Laundry with ID "${id}" not found`);
    }
    return laundry;
  }


  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Laundry with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
