import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TheatersService } from './theaters.service';
import { TheatersController } from './theaters.controller';
import { Theater, TheaterSchema } from './schemas/theater.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Theater.name, schema: TheaterSchema },
    { name: Place.name, schema: PlaceSchema },
  ])],
  controllers: [TheatersController],
  providers: [TheatersService],
})
export class TheatersModule {}
