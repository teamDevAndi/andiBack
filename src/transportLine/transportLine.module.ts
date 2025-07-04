import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransportLineService } from './transportLine.service';
import { TransportLineController } from './transportLine.controller';

import { TransportLine, TransportLineSchema } from './schema/transportLine.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';
import { TransportTypes,TransportTypesSchema } from './schema/transporttypes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TransportLine.name, schema: TransportLineSchema },
      { name: Place.name, schema: PlaceSchema },
      { name: TransportTypes.name, schema: TransportTypesSchema },
    ]),
  ],
  controllers: [TransportLineController],
  providers: [TransportLineService],
})
export class TransportLineModule {}
