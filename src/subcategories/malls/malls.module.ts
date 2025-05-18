import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MallsController } from './malls.controller';
import { MallsService } from './malls.service';
import { Mall, MallSchema } from './schemas/mall.schema';
import { EntertainmentArea, EntertainmentAreaSchema } from './schemas/entertainment_area';
import { StoreType, StoreTypeSchema } from './schemas/store_types.schemas';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Mall.name, schema: MallSchema },
    { name: EntertainmentArea.name, schema: EntertainmentAreaSchema },
    { name: StoreType.name, schema: StoreTypeSchema },
    { name: Place.name, schema: PlaceSchema },
  ])],
  controllers: [MallsController],
  providers: [MallsService],
})
export class MallsModule {}
