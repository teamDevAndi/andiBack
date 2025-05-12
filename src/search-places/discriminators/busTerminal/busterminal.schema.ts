import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class BusTerminal extends Place {
  @Prop({ required: true })
  ticket_sales: boolean;

  @Prop({ required: true })
  facilities: Languages[];

  @Prop({ required: true })
  parking_available: boolean;

  @Prop({ required: true })
  wifi_available: boolean;

  @Prop({ required: true })
  luggage_storage: boolean;

  @Prop({ required: true })
  phone_number: string;
}

export const BusTerminalSchema = SchemaFactory.createForClass(BusTerminal);
