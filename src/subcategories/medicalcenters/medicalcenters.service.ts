import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MedicalCenter } from './schemas/medicalcenter.schema';
import { CreateMedicalCenterDto } from './dto/medicalcenter.dto';

@Injectable()
export class MedicalCentersService {
  constructor(@InjectModel(MedicalCenter.name) private model: Model<MedicalCenter>) {}

  create(dto: CreateMedicalCenterDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().populate(['place_id', 'specialties', 'insurance_accepted', 'language_support']).exec();
  }

  async findOne(id: string) {
    const found = await this.model.findById(id).populate(['place_id', 'specialties', 'insurance_accepted', 'language_support']).exec();
    if (!found) throw new NotFoundException('Medical center not found');
    return found;
  }

  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Medical center not found');
    return deleted;
  }
}
