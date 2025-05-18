// placelocation.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlaceLocation } from './schemas/placelocation.schema';
import { CreatePlaceLocationDto } from './dto/placelocation.dto';

@Injectable()
export class PlaceLocationService {
  constructor(
    @InjectModel(PlaceLocation.name) private placeLocationModel: Model<PlaceLocation>,
  ) {}

  async create(createDto: CreatePlaceLocationDto): Promise<PlaceLocation> {
    return this.placeLocationModel.create(createDto);
  }

  async findAll(): Promise<PlaceLocation[]> {
    return this.placeLocationModel.find().populate('id_place');
  }

  async findById(id: string): Promise<PlaceLocation> {
    const location = await this.placeLocationModel.findById(id).populate('id_place');
    if (!location) throw new NotFoundException('Ubicación no encontrada');
    return location;
  }

  async remove(id: string): Promise<void> {
    const result = await this.placeLocationModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Ubicación no encontrada');
  }
}
