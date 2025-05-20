import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrekkingsController } from './trekkings.controller';
import { TrekkingsService } from './trekkings.service';
import { Trekking, TrekkingSchema } from './schemas/trekking.schema';
import { Equipment, EquipmentSchema } from './schemas/equipment.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Trekking.name, schema: TrekkingSchema },
      { name: Equipment.name, schema: EquipmentSchema },
      { name: Place.name, schema: PlaceSchema },
    ]),
  ],
  controllers: [TrekkingsController],
  providers: [TrekkingsService],
  exports: [TrekkingsService],
})
export class TrekkingsModule {}
