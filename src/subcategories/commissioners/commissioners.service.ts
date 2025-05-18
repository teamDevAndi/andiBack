import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Commissioner } from './schemas/commissioner.schema';
import { CreateCommissionerDto } from './dto/commissioner.dto';

@Injectable()
export class CommissionersService {
  constructor(
    @InjectModel(Commissioner.name) private readonly model: Model<Commissioner>,
  ) {}

  async create(dto: CreateCommissionerDto): Promise<Commissioner> {
    return this.model.create(dto);
  }

  async findAll(): Promise<Commissioner[]> {
    return this.model.find().populate(['place_id', 'language_support']).exec();
  }

  async findById(id: string): Promise<Commissioner> {
    const commissioner = await this.model.findById(id)
    .populate(['place_id', 'language_support']).exec();
    if (!commissioner) {
      throw new NotFoundException(`Commissioner with ID "${id}" not found`);
    }
    return commissioner;
  }
  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Commissioner with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
