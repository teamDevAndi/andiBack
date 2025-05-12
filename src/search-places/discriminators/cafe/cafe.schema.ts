import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';

export class Cafe extends Place {
  @Prop({ required: true })
  price_range: number;

  @Prop({ required: true })
  pet_friendly: boolean;

  @Prop({ required: true })
  outdoor_seating: boolean;

  @Prop({ required: true })
  wifi_available: boolean;

  @Prop({ required: true })
  work_friendly: boolean;

  @Prop({ required: true })
  phone_number: string;
}

export const CafeSchema = SchemaFactory.createForClass(Cafe);
