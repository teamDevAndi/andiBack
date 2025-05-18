import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Trekking } from './schemas/trekking.schema';
import { CreateTrekkingDto } from './dto/trekking.dto';

@Injectable()
export class TrekkingsService {
  constructor(
    @InjectModel(Trekking.name) private trekkingModel: Model<Trekking>,
  ) {}

  async create(createTrekkingDto: CreateTrekkingDto): Promise<Trekking> {
    const newTrekking = new this.trekkingModel(createTrekkingDto);
    return newTrekking.save();
  }

  async findAll(): Promise<Trekking[]> {
    return this.trekkingModel.find().populate(['place_id', 'equipment_required']).exec();
  }

  async findById(id: string): Promise<Trekking> {
    const trekking = await this.trekkingModel.findById(id).populate(['place_id', 'equipment_required']).exec();
    if (!trekking) {
      throw new NotFoundException(`Trekking with ID "${id}" not found`);
    }
    return trekking;
  }

  async delete(id: string): Promise<void> {
    const result = await this.trekkingModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Trekking with ID "${id}" not found`);
    }
  }
}
