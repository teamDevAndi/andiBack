import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SportAreasService } from './sportareas.service';
import { SportAreasController } from './sportareas.controller';
import { SportArea, SportAreaSchema } from './schemas/sportarea.schema';
import { SurfaceTypes, SurfaceTypesSchema } from './schemas/surfaceTypes.chema';
import { Sports, SportsSchema } from './schemas/sports.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SportArea.name, schema: SportAreaSchema },
      { name: Sports.name, schema: SportsSchema },
      { name: SurfaceTypes.name, schema: SurfaceTypesSchema },
      { name: Place.name, schema: PlaceSchema },
    ]),
  ],
  controllers: [SportAreasController],
  providers: [SportAreasService],
})
export class SportAreasModule {}
