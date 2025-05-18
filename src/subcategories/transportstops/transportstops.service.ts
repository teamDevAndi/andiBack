import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TransportStop } from './schemas/transportstop.schema';
import { Model } from 'mongoose';
import { CreateTransportStopDto } from './dto/transportstop.dto';

@Injectable()
export class TransportStopsService {
  constructor(
    @InjectModel(TransportStop.name)
    private readonly model: Model<TransportStop>,
  ) {}

  async create(dto: CreateTransportStopDto): Promise<TransportStop> {
    return this.model.create(dto);
  }

  async findAll(): Promise<TransportStop[]> {
    return this.model.find().populate(['place_id', 'transport_type', 'lines_available']).exec();
  }

  async findById(id: string): Promise<TransportStop> {
    const transportStop = await this.model.findById(id)
    .populate(['place_id', 'transport_type', 'lines_available']).exec();
    if (!transportStop) {
      throw new NotFoundException(`TransportStop with ID "${id}" not found`);
    }
    return transportStop;
  }
  

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`TransportStop with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
