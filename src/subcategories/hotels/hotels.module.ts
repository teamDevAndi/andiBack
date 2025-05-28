import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { Hotel, HotelSchema } from './schemas/hotel.schema';
import { Amenity, AmenitySchema } from './schemas/ammenities.schema';
import { RoomType, RoomTypeSchema } from './schemas/room_type.schema';
import { Language, LanguageSchema } from 'src/common/schemas/languages.shcema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Hotel.name, schema: HotelSchema },
      { name: Amenity.name, schema: AmenitySchema },
      { name: RoomType.name, schema: RoomTypeSchema },
      { name: Language.name, schema: LanguageSchema },
      { name: Place.name, schema: PlaceSchema },
    ])
  ],
  controllers: [HotelsController],
  providers: [HotelsService],
})
export class HotelsModule {}
