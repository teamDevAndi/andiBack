import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BusTerminal } from './schemas/busterminal.schema';
import { Model } from 'mongoose';
import { CreateBusTerminalDto } from './dto/busterminal.dto';

@Injectable()
export class BusTerminalsService {
  constructor(
    @InjectModel(BusTerminal.name)
    private readonly model: Model<BusTerminal>,
  ) {}

  async create(dto: CreateBusTerminalDto): Promise<BusTerminal> {
    return this.model.create(dto);
  }

  async findAll(): Promise<BusTerminal[]> {
    return this.model.find().populate(['place_id', 'facilities']).exec();
  }

  async findById(id: string): Promise<BusTerminal> {
    const busTerminal = await this.model.findById(id)
    .populate(['place_id', 'facilities']).exec();
    if (!busTerminal) {
      throw new NotFoundException(`BusTerminal with ID "${id}" not found`);
    }
    return busTerminal;
  }
  

  async delete(id: string): Promise<{ deleted: boolean }> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`BusTerminal with ID "${id}" not found`);
    }
    return { deleted: true };
  }
}
