import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommissionersService } from './commissioners.service';
import { CommissionersController } from './commissioners.controller';
import { Commissioner, CommissionerSchema } from './schemas/commissioner.schema';
import { Language, LanguageSchema } from 'src/common/schemas/languages.shcema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';
import { Facility, FacilitySchema } from 'src/common/schemas/facility.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Commissioner.name, schema: CommissionerSchema },
      { name: Language.name, schema: LanguageSchema },
      { name: Facility.name, schema: FacilitySchema },
      { name: Place.name, schema: PlaceSchema },
    ])
  ],
  controllers: [CommissionersController],
  providers: [CommissionersService],
})
export class CommissionersModule {}
