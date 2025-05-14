import { Module } from '@nestjs/common';
import { SearchPlacesService } from './search-places.service';
import { SearchPlacesController } from './search-places.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceSchema } from './schemas/place.schema';
import { PlaceLocationSchema } from './schemas/place-location.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Place', schema: PlaceSchema }]),
    MongooseModule.forFeature([{ name: 'PlaceLocation', schema: PlaceLocationSchema }])
  ],
  providers: [SearchPlacesService],
  controllers: [SearchPlacesController]
})
export class SearchPlacesModule { }
