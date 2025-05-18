import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParksService } from './parks.service';
import { ParksController } from './parks.controller';
import { Park, ParkSchema } from './schemas/park.schema';
import { FloraFauna, FloraFaunaSchema } from 'src/common/schemas/flora_fauna_highlights.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Park.name, schema: ParkSchema },
      { name: FloraFauna.name, schema: FloraFaunaSchema },
      { name: Place.name, schema: PlaceSchema },
    ]),
  ],
  controllers: [ParksController],
  providers: [ParksService],
})
export class ParksModule {}
