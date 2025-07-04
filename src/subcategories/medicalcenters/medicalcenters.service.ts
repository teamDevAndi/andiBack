import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MedicalCenter } from './schemas/medicalcenter.schema';
import { CreateMedicalCenterDto } from './dto/medicalcenter.dto';
import { PopulatedPlaceBase } from 'src/common/interfaces/base.interface';
import { getTranslation } from 'src/helpers/translation.helper';

@Injectable()
export class MedicalCentersService {
  constructor(@InjectModel(MedicalCenter.name) private model: Model<MedicalCenter>) {}

  create(dto: CreateMedicalCenterDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().populate(['place_id', 'specialties', 'insurance_accepted', 'language_support']).exec();
  }

  async findOne(place_id: string, lang = 'en'): Promise<any> {
    const medical = await this.model
    .findOne(
        { place_id: new Types.ObjectId(place_id) }
    )
    .populate([
      {
        path: 'place_id',
        populate: {
          path: 'place_location',
        },
      },
      {
        path: 'specialties',
      },
      {
        path: 'insurance_accepted',
      },
      {
        path: 'language_support',
      },])
    .lean<PopulatedPlaceBase>()
    .exec();
    if (!medical) throw new NotFoundException('Medical center not found');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description_place, costs, ...restPlace } = medical.place_id
    const translated = {
      ...medical,
      place_id: {
        ...restPlace,
        description_place: getTranslation(description_place, lang),
        costs: costs?.map((cost) => ({
          mount: cost.mount,
          reason: getTranslation(cost.reason, lang),
        })),
      },
      specialties: medical.specialties?.map(
        (opt) => getTranslation( opt,lang),
      ),
      insurance_accepted: medical.insurance_accepted?.map(
        (fac) => getTranslation(fac,lang),
      ),
      language_support: medical.language_support?.map(
        (opt) => getTranslation(opt,lang),
      ),
    };

    return translated;
  }


  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Medical center not found');
    return deleted;
  }
}
