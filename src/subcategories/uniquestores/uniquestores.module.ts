import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UniqueStoresController } from './uniquestores.controller';
import { UniqueStoresService } from './uniquestores.service';
import { UniqueStore, UniqueStoreSchema } from './schemas/uniquestore.schema';
import { ExclusiveItem, ExclusiveItemSchema } from './schemas/exclusive_items.schema';
import { Specialization, SpecializationSchema } from './schemas/specialization.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: UniqueStore.name, schema: UniqueStoreSchema },
    { name: ExclusiveItem.name, schema: ExclusiveItemSchema },
    { name: Specialization.name, schema: SpecializationSchema },
    { name: Place.name, schema: PlaceSchema },
  ])],
  controllers: [UniqueStoresController],
  providers: [UniqueStoresService],
})
export class UniqueStoresModule {}
