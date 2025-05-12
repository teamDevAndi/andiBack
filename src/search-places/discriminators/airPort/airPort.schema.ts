import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Airport extends Place {
  @Prop({ required: true })
  airportCode: string;

  @Prop({ required: true })
  transportOptions: Languages[];

  @Prop({ required: true })
  luggage_storage: boolean;

  @Prop({ required: true })
  wifi_available: boolean;

  @Prop({ required: true })
  facilities: Languages[];
}

export const AirportSchema = SchemaFactory.createForClass(Airport);
