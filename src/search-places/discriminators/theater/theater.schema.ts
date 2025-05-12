import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';

export class Theater extends Place {
  @Prop({ required: true })
  seating_capacity: number;

  @Prop({ required: true })
  guided_tour_available: boolean;
}

export const TheaterSchema = SchemaFactory.createForClass(Theater);
