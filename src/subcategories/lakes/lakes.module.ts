import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LakesService } from './lakes.service';
import { LakesController } from './lakes.controller';
import { Lake, LakeSchema } from './schemas/lake.schema';
import { WaterType, WaterTypeSchema } from './schemas/water_type.schema';
import { ActivitiesAllowed, ActivitiesAllowedSchema } from './schemas/activities_allowed.schema';
import { FloraFauna, FloraFaunaSchema } from 'src/common/schemas/flora_fauna_highlights.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';
import { Facility, FacilitySchema } from 'src/common/schemas/facility.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Lake.name, schema: LakeSchema },
      { name: WaterType.name, schema: WaterTypeSchema },
      { name: ActivitiesAllowed.name, schema: ActivitiesAllowedSchema },
      { name: FloraFauna.name, schema: FloraFaunaSchema },
      { name: Facility.name, schema: FacilitySchema },
      { name: Place.name, schema: PlaceSchema },
    ]),
  ],
  controllers: [LakesController],
  providers: [LakesService],
})
export class LakesModule {}
