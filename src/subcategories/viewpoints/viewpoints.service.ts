import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Viewpoint } from './interfaces/viewpoint.interface';
import { CreateViewpointDto } from './dto/viewpoint.dto';

@Injectable()
export class ViewpointsService {
  
  constructor(
    @InjectModel('Viewpoint') private readonly viewpointModel: Model<Viewpoint>,
  ) {}

  async create(createViewpointDto: CreateViewpointDto): Promise<Viewpoint> {
    const created = new this.viewpointModel(createViewpointDto);
    return created.save();
  }

  async findAll(): Promise<Viewpoint[]> {
    return this.viewpointModel.find()
    .populate(['place_id','view_type'])
    .exec();
  }

  async findById(id: string): Promise<Viewpoint> {
    const viewpoint = await this.viewpointModel.findById(id)
    .populate(['place_id','view_type'])
    .exec();
    if (!viewpoint) {
      throw new NotFoundException(`Viewpoint with ID "${id}" not found`);
    }
    return viewpoint;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.viewpointModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Viewpoint with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
