import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FoodArea } from './schemas/foodarea.schema';
import { CreateFoodAreaDto } from './dto/foodarea.dto';

@Injectable()
export class FoodAreasService {
  constructor(@InjectModel(FoodArea.name) private foodAreaModel: Model<FoodArea>) {}

  async create(dto: CreateFoodAreaDto): Promise<FoodArea> {
    return this.foodAreaModel.create(dto);
  }

  async findAll(): Promise<FoodArea[]> {
    return this.foodAreaModel.find().populate(['place_id','vendor_types']).exec();
  }

  async findOne(id: string): Promise<FoodArea> {
    const found = await this.foodAreaModel.findById(id).populate(['place_id','vendor_types']).exec();
    if (!found) throw new NotFoundException('FoodArea not found');
    return found;
  }

  async remove(id: string): Promise<void> {
    const deleted = await this.foodAreaModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('FoodArea not found');
  }
}
