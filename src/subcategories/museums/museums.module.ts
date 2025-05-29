import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MuseumsService } from './museums.service';
import { MuseumsController } from './museums.controller';
import { Museum, MuseumSchema } from './schemas/museum.schema';
import { CollectionTypes, CollectionTypesSchema } from './schemas/collectionTypes.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';
import { Facility, FacilitySchema } from 'src/common/schemas/facility.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Museum.name, schema: MuseumSchema },
      { name: CollectionTypes.name, schema: CollectionTypesSchema },
      { name: Facility.name, schema: FacilitySchema },
    { name: Place.name, schema: PlaceSchema },

  ])],
  controllers: [MuseumsController],
  providers: [MuseumsService],
})
export class MuseumsModule {}
