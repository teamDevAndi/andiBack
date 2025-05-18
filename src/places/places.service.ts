import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Place } from './interfaces/place.interface';
import { CreatePlaceDto } from './dto/place.dto';

@Injectable()
export class PlacesService {
  constructor(
    @InjectModel('Place') private readonly placeModel: Model<Place>,
  ) {}

  async create(createPlaceDto: CreatePlaceDto): Promise<Place> {
    const newPlace = new this.placeModel(createPlaceDto);
    return await newPlace.save();
  }

  async findAll(): Promise<Place[]> {
    return await this.placeModel.find().exec();
  }

  async findOne(id: string): Promise<Place> {
    const place = await this.placeModel.findById(id).exec();
    if (!place) {
      throw new NotFoundException(`Lugar con ID ${id} no encontrado`);
    }
    return place;
  }

  async remove(id: string): Promise<void> {
    const result = await this.placeModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Lugar con ID ${id} no encontrado`);
    }
  }
}
