import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Museum } from './schemas/museum.schema';
import { CreateMuseumDto } from './dto/museum.dto';

@Injectable()
export class MuseumsService {
  constructor(@InjectModel(Museum.name) private museumModel: Model<Museum>) {}

  async create(dto: CreateMuseumDto): Promise<Museum> {
    return this.museumModel.create(dto);
  }

  async findAll(): Promise<Museum[]> {
    return this.museumModel.find().populate(['place_id', 'collection_type']).exec();
  }

  async findOne(id: string): Promise<Museum> {
    const museum = await this.museumModel.findById(id).populate(['place_id', 'collection_type']).exec();
    if (!museum) throw new NotFoundException('Museum not found');
    return museum;
  }

  async remove(id: string): Promise<void> {
    const deleted = await this.museumModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Museum not found');
  }
}
