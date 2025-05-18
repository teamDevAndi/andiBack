import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SportArea } from './interfaces/sportarea.interface';
import { CreateSportAreaDto } from './dto/sportarea.dto';


@Injectable()
export class SportAreasService {
  constructor(@InjectModel('SportArea') private readonly model: Model<SportArea>) {}

  create(data: CreateSportAreaDto) {
    return new this.model(data).save();
  }

  async findAll(): Promise<SportArea[]>{
    return this.model.find().populate(['place_id', 'sports_available', 'surface_type', 'facilities']).exec();
  }

  async findOne(id: string): Promise<SportArea> {
    const result = await this.model.findById(id).populate(['place_id', 'sports_available', 'surface_type', 'facilities']).exec();
    if (!result) throw new NotFoundException('Sport Area not found');
    return result;
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}