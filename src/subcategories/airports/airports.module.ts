import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Airport, AirportSchema } from './schemas/airport.schema';
import { AirportsService } from './airports.service';
import { AirportsController } from './airports.controller';
import { TransportType, TransportTypeSchema } from 'src/common/schemas/transport_type.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';
import { Facility, FacilitySchema } from 'src/common/schemas/facility.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Airport.name, schema: AirportSchema },
      { name: TransportType.name, schema: TransportTypeSchema },
      { name: Facility.name, schema: FacilitySchema },
      { name: Place.name, schema: PlaceSchema },

    ])
  ],
  controllers: [AirportsController],
  providers: [AirportsService],
})
export class AirportsModule {}
