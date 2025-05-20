import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Place } from 'src/places/interfaces/place.interface';

@Schema({ versionKey: false })
export class BusTerminal extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Place;

  @Prop({ required: true })
  ticket_sales: boolean;

  @Prop({ type: [Types.ObjectId], ref: 'Facility', required: true })
  facilities: Types.ObjectId[];

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
