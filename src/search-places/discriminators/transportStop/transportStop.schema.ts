import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class TransportStop extends Place {
  @Prop({ required: true })
  transport_type: Languages[];

  @Prop({ required: true })
  lines_available: Languages[];

  @Prop({ required: true })
  shelter_available: boolean;

  @Prop({ required: true })
  seating_available: boolean;

  @Prop({ required: true })
  frequency: string;
}

export const TransportStopSchema = SchemaFactory.createForClass(TransportStop);
