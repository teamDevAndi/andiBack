import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Park } from './interfaces/park.interface';
import { CreateParkDto } from './dto/park.dto';

@Injectable()
export class ParksService {
  constructor(@InjectModel('Park') private readonly parkModel: Model<Park>) {}

  async create(createParkDto: CreateParkDto): Promise<Park> {
    const created = new this.parkModel(createParkDto);
    return created.save();
  }

  async findAll(): Promise<Park[]> {
    return this.parkModel.find()
    .populate(['place_id', 'flora_fauna_highlights','facilities'])
    .exec();
  }

  async findById(id: string): Promise<Park> {
    const park = await this.parkModel.findById(id)
    .populate(['place_id', 'flora_fauna_highlights','facilities'])
    .exec();
    if (!park) {
      throw new NotFoundException(`Park with ID "${id}" not found`);
    }
    return park;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.parkModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Park with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
