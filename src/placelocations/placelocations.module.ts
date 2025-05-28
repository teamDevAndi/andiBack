import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceLocationService } from './placelocations.service';
import { PlaceLocationController } from './placelocations.controller';
import { PlaceLocation, PlaceLocationSchema } from './schemas/placelocation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlaceLocation.name, schema: PlaceLocationSchema }
    ])
  ],
  controllers: [PlaceLocationController],
  providers: [PlaceLocationService],
  exports: [PlaceLocationService]
})
export class PlaceLocationModule {}
