import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Church } from './interfaces/church.interface';
import { CreateChurchDto } from './dto/church.dto';

@Injectable()
export class ChurchesService {
  constructor(
    @InjectModel('Church') private readonly churchModel: Model<Church>,
  ) {}

  async create(createChurchDto: CreateChurchDto): Promise<Church> {
    const created = new this.churchModel(createChurchDto);
    return created.save();
  }

  async findAll(): Promise<Church[]> {
    return this.churchModel.find()
    .populate(['place_id', 'denomination','architectural_style','facilities','nearby_facilities']).exec();
  }

  async findById(id: string): Promise<Church> {
    const church = await this.churchModel.findById(id)
    .populate(['place_id', 'denomination','architectural_style','facilities','nearby_facilities']).exec();
    if (!church) {
      throw new NotFoundException(`Church with ID "${id}" not found`);
    }
    return church;
  }
  

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.churchModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Church with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
