import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SquaresService } from './squares.service';
import { SquaresController } from './squares.controller';
import {Square, SquareSchema } from './schemas/square.schema';
import { Attraction, AttractionSchema } from './schemas/attractions.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Square.name, schema: SquareSchema },
      { name: Attraction.name, schema: AttractionSchema },
      { name: Place.name, schema: PlaceSchema },

    ]),
  ],
  controllers: [SquaresController],
  providers: [SquaresService],
})
export class SquaresModule {}
