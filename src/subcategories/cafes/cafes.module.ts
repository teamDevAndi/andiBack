import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CafeService } from './cafes.service';
import { CafesController } from './cafes.controller';
import { Cafe, CafeSchema } from './schemas/cafe.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Cafe.name, schema: CafeSchema },
    { name: Place.name, schema: PlaceSchema },
  ])],
  controllers: [CafesController],
  providers: [CafeService],
})
export class CafesModule {}
