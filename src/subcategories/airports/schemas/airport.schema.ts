import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Place } from 'src/places/interfaces/place.interface';

@Schema({ versionKey: false })
export class Airport extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Place;

  @Prop({ required: true })
  airport_code: string;

  @Prop({ type: [Types.ObjectId], ref: 'TransportType', required: true })
  transport_options: Types.ObjectId[];

  @Prop({ required: true })
  luggage_storage: boolean;

  @Prop({ required: true })
  wifi_available: boolean;

  @Prop({ type: [Types.ObjectId], ref: 'Facility', required: true })
  facilities: Types.ObjectId[];
}

export const AirportSchema = SchemaFactory.createForClass(Airport);
