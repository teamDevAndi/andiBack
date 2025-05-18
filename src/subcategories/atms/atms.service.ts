import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ATM } from './schemas/atm.schema';
import { Model } from 'mongoose';
import { CreateAtmDto } from './dto/atm.dto';

@Injectable()
export class AtmsService {
  constructor(
    @InjectModel(ATM.name)
    private readonly model: Model<ATM>,
  ) {}

  async create(dto: CreateAtmDto): Promise<ATM> {
    return this.model.create(dto);
  }

  async findAll(): Promise<ATM[]> {
    return this.model.find().populate(['place_id', 'currency_available', 'languages_available']).exec();
  }

  async findById(id: string): Promise<ATM> {
    const atm = await this.model.findById(id)
    .populate(['place_id', 'currency_available', 'languages_available']).exec();
    if (!atm) {
      throw new NotFoundException(`ATM with ID "${id}" not found`);
    }
    return atm;
  }
  

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`ATM with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
