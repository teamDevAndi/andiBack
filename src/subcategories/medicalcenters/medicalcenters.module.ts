import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalCentersService } from './medicalcenters.service';
import { MedicalCentersController } from './medicalcenters.controller';
import { MedicalCenter, MedicalCenterSchema } from './schemas/medicalcenter.schema';
import { Language, LanguageSchema } from 'src/common/schemas/languages.shcema';
import { MedicalSpeciality, MedicalSpecialitySchema } from './schemas/medical_specialities.schema';
import { Insurance, InsuranceSchema } from './schemas/insurance.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: MedicalCenter.name, schema: MedicalCenterSchema },
    { name: Language.name, schema: LanguageSchema },
    { name: MedicalSpeciality.name, schema: MedicalSpecialitySchema },
    { name: Insurance.name, schema: InsuranceSchema },
    { name: Place.name, schema: PlaceSchema },

  ])],
  controllers: [MedicalCentersController],
  providers: [MedicalCentersService],
})
export class MedicalCentersModule {}
