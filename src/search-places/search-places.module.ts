import { Module } from '@nestjs/common';
import { SearchPlacesService } from './search-places.service';
import { SearchPlacesController } from './search-places.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Place, PlaceSchema } from './schemas/place.schema';
import { PlaceLocationSchema } from './schemas/place-location.schema';
import { TreekingSchema } from './discriminators/treeking/treeking.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Place', schema: PlaceSchema }]),
    MongooseModule.forFeature([{ name: 'PlaceLocation', schema: PlaceLocationSchema }]),
    MongooseModule.forFeatureAsync([
      {
        name: Place.name,
        useFactory: () => {
          const schema = PlaceSchema;
          schema.discriminator('Trekking', TreekingSchema);
          // Add other discriminators here
          return Schema;
        }
      }
    ])
  ],
  providers: [SearchPlacesService],
  controllers: [SearchPlacesController]
})
export class SearchPlacesModule { }
