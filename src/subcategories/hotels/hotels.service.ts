import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel } from './schemas/hotel.schema';
import { CreateHotelDto } from './dto/hotel.dto';

@Injectable()
export class HotelsService {
  constructor(@InjectModel(Hotel.name) private readonly model: Model<Hotel>) {}

  async create(dto: CreateHotelDto): Promise<Hotel> {
    return this.model.create(dto);
  }

  async findAll(): Promise<Hotel[]> {
    return this.model.find().populate(['place_id', 'room_types', 'amenities', 'language_support']).exec();
  }

  async findById(id: string): Promise<Hotel> {
    const hotel = await this.model.findById(id)
    .populate(['place_id', 'room_types', 'amenities', 'language_support']).exec();
    if (!hotel) {
      throw new NotFoundException(`Hotel with ID "${id}" not found`);
    }
    return hotel;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Hotel with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
