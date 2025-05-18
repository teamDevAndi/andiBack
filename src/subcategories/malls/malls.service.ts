import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mall } from './schemas/mall.schema';
import { Model } from 'mongoose';
import { CreateMallDto } from './dto/mall.dto';

@Injectable()
export class MallsService {
  constructor(@InjectModel(Mall.name) private model: Model<Mall>) {}

  create(dto: CreateMallDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().populate(['place_id', 'store_types', 'entertainment_area']).exec();
  }

  async findOne(id: string) {
    const mall = await this.model.findById(id).populate(['place_id', 'store_types', 'entertainment_area']).exec();
    if (!mall) throw new NotFoundException('Mall not found');
    return mall;
  }
  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Mall not found');
    return deleted;
  }
}
