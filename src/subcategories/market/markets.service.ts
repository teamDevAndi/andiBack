import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Market } from './schemas/market.schema';
import { CreateMarketDto } from './dto/market.dto';

@Injectable()
export class MarketsService {
  constructor(@InjectModel(Market.name) private model: Model<Market>) {}

  create(dto: CreateMarketDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().populate('place_id market_type');
  }

  async findOne(id: string) {
    const market = await this.model.findById(id).populate('place_id market_type');
    if (!market) throw new NotFoundException('Market not found');
    return market;
  }

  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Market not found');
    return deleted;
  }
}
