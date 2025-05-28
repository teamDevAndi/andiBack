import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransportStop, TransportStopSchema } from './schemas/transportstop.schema';
import { TransportStopsService } from './transportstops.service';
import { TransportStopsController } from './transportstops.controller';
import { TransportType, TransportTypeSchema } from 'src/common/schemas/transport_type.schema';
import { LinesTransport, LinesTransportSchema } from './schemas/lines_transport.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TransportStop.name, schema: TransportStopSchema },
      { name: TransportType.name, schema: TransportTypeSchema },
      { name: LinesTransport.name, schema: LinesTransportSchema },
      { name: Place.name, schema: PlaceSchema },

    ])
  ],
  controllers: [TransportStopsController],
  providers: [TransportStopsService],
})
export class TransportStopsModule {}
