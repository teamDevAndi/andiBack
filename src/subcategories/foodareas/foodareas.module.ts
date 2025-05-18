import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodAreasController } from './foodareas.controller';
import { FoodAreasService } from './foodareas.service';
import { FoodArea, FoodAreaSchema } from './schemas/foodarea.schema';
import { VendorType, VendorTypeSchema } from './schemas/vendorTypes.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: FoodArea.name, schema: FoodAreaSchema },
    { name: VendorType.name, schema: VendorTypeSchema },
    { name: Place.name, schema: PlaceSchema },
  ])],
  controllers: [FoodAreasController],
  providers: [FoodAreasService],
})
export class FoodAreasModule {}
