import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Theater } from './schemas/theater.schema';
import { CreateTheaterDto } from './dto/theater.dto';

@Injectable()
export class TheatersService {
  constructor(@InjectModel(Theater.name) private theaterModel: Model<Theater>) {}

  async create(dto: CreateTheaterDto): Promise<Theater> {
    return this.theaterModel.create(dto);
  }

  async findAll(): Promise<Theater[]> {
    return this.theaterModel.find().populate('place_id');
  }

  async findOne(id: string): Promise<Theater> {
    const theater = await this.theaterModel.findById(id).populate('place_id');
    if (!theater) throw new NotFoundException('Theater not found');
    return theater;
  }

  async remove(id: string): Promise<void> {
    const deleted = await this.theaterModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Theater not found');
  }
}
