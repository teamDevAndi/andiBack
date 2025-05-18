import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ViewpointsService } from './viewpoints.service';
import { ViewpointsController } from './viewpoints.controller';
import { Viewpoint, ViewPointSchema } from './schemas/viewpoint.schema';
import { ViewType, ViewTypeSchema } from './schemas/viewtype.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Viewpoint.name, schema: ViewPointSchema },
      { name: ViewType.name, schema: ViewTypeSchema },
      { name: Place.name, schema: PlaceSchema },
    ]),
  ],
  controllers: [ViewpointsController],
  providers: [ViewpointsService],
})
export class ViewPointsModule {}
