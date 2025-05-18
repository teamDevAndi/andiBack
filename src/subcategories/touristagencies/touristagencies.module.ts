import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TouristAgency, TouristAgencySchema } from './schemas/touristagency.schema';
import { TouristAgenciesService } from './touristagencies.service';
import { TouristAgenciesController } from './touristagencies.controller';
import { Certification, CertificationSchema } from './schemas/certification.schema';
import { TourType, TourTypeSchema } from './schemas/tour_type.schema';
import { PaymentMethod, PaymentMethodSchema } from 'src/common/schemas/payment_methods.schema';
import { Language, LanguageSchema } from 'src/common/schemas/languages.shcema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TouristAgency.name, schema: TouristAgencySchema },
      { name: Certification.name, schema: CertificationSchema },
      { name: TourType.name, schema: TourTypeSchema },
      { name: PaymentMethod.name, schema: PaymentMethodSchema },
      { name: Language.name, schema: LanguageSchema },
      { name: Place.name, schema: PlaceSchema },
    ])
  ],
  controllers: [TouristAgenciesController],
  providers: [TouristAgenciesService],
})
export class TouristAgenciesModule {}
