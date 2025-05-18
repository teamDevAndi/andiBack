import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cafe } from './schemas/cafe.schema';
import { CreateCafeDto } from './dto/cafe.dto';

@Injectable()
export class CafeService {
  constructor(@InjectModel(Cafe.name) private cafeModel: Model<Cafe>) {}

  async create(dto: CreateCafeDto): Promise<Cafe> {
    return this.cafeModel.create(dto);
  }

  async findAll(): Promise<Cafe[]> {
    return this.cafeModel.find().exec();
  }

  async findOne(id: string): Promise<Cafe> {
    const cafe = await this.cafeModel.findById(id).exec();
    if (!cafe) throw new NotFoundException('Cafe not found');
    return cafe;
  }


  async remove(id: string): Promise<void> {
    const result = await this.cafeModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Restaurant not found');
  }
}
