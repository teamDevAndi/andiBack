import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Supermarket } from './schemas/supermarket.schema';
import { CreateSupermarketDto } from './dto/supermarket.dto';

@Injectable()
export class SupermarketsService {
  constructor(@InjectModel(Supermarket.name) private model: Model<Supermarket>) {}

  create(dto: CreateSupermarketDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().populate(['place_id', 'product_categories', 'payment_methods']);
  }

  async findOne(id: string) {
    const market = await this.model.findById(id).populate(['place_id', 'product_categories', 'payment_methods']);
    if (!market) throw new NotFoundException('Supermarket not found');
    return market;
  }

  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Supermarket not found');
    return deleted;
  }
}
