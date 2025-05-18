import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ruin } from './schemas/ruin.schema';
import { CreateRuinDto } from './dto/ruin.dto';

@Injectable()
export class RuinsService {
  constructor(@InjectModel(Ruin.name) private ruinModel: Model<Ruin>) {}

  async create(dto: CreateRuinDto): Promise<Ruin> {
    return this.ruinModel.create(dto);
  }

  async findAll(): Promise<Ruin[]> {
    return this.ruinModel.find().populate('place_id historical_period');
  }

  async findOne(id: string): Promise<Ruin> {
    const ruin = await this.ruinModel.findById(id).populate('place_id historical_period');
    if (!ruin) throw new NotFoundException('Ruin not found');
    return ruin;
  }
  async remove(id: string): Promise<void> {
    const deleted = await this.ruinModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Ruin not found');
  }
}
