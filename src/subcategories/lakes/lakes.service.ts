import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lake } from './interfaces/lake.interface';
import { CreateLakeDto } from './dto/lake.dto';

@Injectable()
export class LakesService {
  constructor(
    @InjectModel('Lake') private readonly lakeModel: Model<Lake>,
  ) {}

  async create(createLakechDto: CreateLakeDto): Promise<Lake> {
    const created = new this.lakeModel(createLakechDto);
    return created.save();
  }

  async findAll(): Promise<Lake[]> {
    return this.lakeModel.find()
    .populate(['place_id', 'water_type','activities_allowed', 'flora_fauna_highlights', 'facilities'])
    .exec();
  }

  async findById(id: string): Promise<Lake> {
    const church = await this.lakeModel.findById(id)
    .populate(['place_id', 'water_type','activities_allowed', 'flora_fauna_highlights', 'facilities'])
    .exec();
    if (!church) {
      throw new NotFoundException(`Lake with ID "${id}" not found`);
    }
    return church;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.lakeModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Lake with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
