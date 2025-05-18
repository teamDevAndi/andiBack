import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlaceInformation } from './schemas/placeinformation.schema';
import { CreatePlaceInformationDto } from './dto/placeinformation.dto';

@Injectable()
export class PlaceInformationService {
  constructor(
    @InjectModel(PlaceInformation.name)
    private readonly placeInfoModel: Model<PlaceInformation>,
  ) {}

  async create(dto: CreatePlaceInformationDto): Promise<PlaceInformation> {
    return this.placeInfoModel.create(dto);
  }

  async findAll(): Promise<PlaceInformation[]> {
    return this.placeInfoModel.find().populate('id_place');
  }

  async findOne(id: string): Promise<PlaceInformation> {
    const info = await this.placeInfoModel.findById(id).populate('id_place');
    if (!info) throw new NotFoundException('Información no encontrada');
    return info;
  }
  async remove(id: string): Promise<void> {
    const deleted = await this.placeInfoModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Información no encontrada');
  }
}
