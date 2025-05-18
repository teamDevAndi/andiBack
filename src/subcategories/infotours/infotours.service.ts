import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Infotour } from './schemas/infotour.schema';
import { CreateInfotourDto } from './dto/infotour.dto';

@Injectable()
export class InfotoursService {
  constructor(@InjectModel(Infotour.name) private readonly model: Model<Infotour>) {}

  async create(dto: CreateInfotourDto): Promise<Infotour> {
    return this.model.create(dto);
  }

  async findAll(): Promise<Infotour[]> {
    return this.model.find().populate(['place_id', 'language_support']).exec();
  }
  
  async findById(id: string): Promise<Infotour> {
    const infotour = await this.model.findById(id)
    .populate(['place_id', 'language_support']).exec();
    if (!infotour) {
      throw new NotFoundException(`Infotour with ID "${id}" not found`);
    }
    return infotour;
  }
  
  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Infotour with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
