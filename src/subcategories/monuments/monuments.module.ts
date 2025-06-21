import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Monument, MonumentSchema } from './schemas/monument.schema';
import { MonumentsService } from './monuments.service';
import { MonumentsController } from './monuments.controller';
import { MaterialUsed, MaterialUsedSchema } from './schemas/material_used.schemas';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';
import { Facility, FacilitySchema } from 'src/common/schemas/facility.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Monument.name, schema: MonumentSchema },
    { name: MaterialUsed.name, schema: MaterialUsedSchema },
    { name: Facility.name, schema: FacilitySchema },
    { name: Place.name, schema: PlaceSchema },
  ])],
  controllers: [MonumentsController],
  providers: [MonumentsService],
})
export class MonumentsModule {}
