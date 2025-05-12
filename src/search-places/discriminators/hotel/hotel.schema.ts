import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Hotel extends Place {
  @Prop({ required: true })
  room_types: Languages[];

  @Prop({ required: true })
  amenities: Languages[];

  @Prop({ required: true })
  check_in_time: string;

  @Prop({ required: true })
  check_out_time: string;

  @Prop({ required: true })
  parking_available: boolean;

  @Prop({ required: true })
  pet_friendly: boolean;

  @Prop({ required: true })
  language_support: Languages[];

  @Prop({ required: true })
  distance_to_city_center: number;

  @Prop({ required: true })
  Phone_Number: string;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
