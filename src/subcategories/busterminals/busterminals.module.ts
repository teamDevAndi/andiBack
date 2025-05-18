import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusTerminal, BusTerminalSchema } from './schemas/busterminal.schema';
import { BusTerminalsService } from './busterminals.service';
import { BusTerminalsController } from './busterminals.controller';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BusTerminal.name, schema: BusTerminalSchema },
      { name: Place.name, schema: PlaceSchema },

    ])
  ],
  controllers: [BusTerminalsController],
  providers: [BusTerminalsService],
})
export class BusTerminalsModule {}
