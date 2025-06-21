import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ruin, RuinSchema } from './schemas/ruin.schema';
import { RuinsService } from './ruins.service';
import { RuinsController } from './ruins.controller';
import { HistoricalPeriod, HistoricalPeriodSchema } from './schemas/historical_periods.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';
import { Facility, FacilitySchema } from 'src/common/schemas/facility.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Ruin.name, schema: RuinSchema },
    { name: HistoricalPeriod.name, schema: HistoricalPeriodSchema },
    { name: Facility.name, schema: FacilitySchema },
    { name: Place.name, schema: PlaceSchema },

  ])],
  controllers: [RuinsController],
  providers: [RuinsService],
})
export class RuinsModule {}
