import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Monument } from './schemas/monument.schema';
import { CreateMonumentDto } from './dto/monument.dto';

@Injectable()
export class MonumentsService {
  constructor(@InjectModel(Monument.name) private model: Model<Monument>) {}

  create(dto: CreateMonumentDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().populate(['place_id', 'material_used', 'nearby_facilities']).exec();
  }

  async findOne(id: string) {
    const monument = await this.model.findById(id).populate(['place_id', 'material_used', 'nearby_facilities']).exec();
    if (!monument) throw new NotFoundException('Monument not found');
    return monument;
  }
  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Monument not found');
  }
}
