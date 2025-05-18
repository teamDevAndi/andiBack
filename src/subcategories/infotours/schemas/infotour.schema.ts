import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ versionKey: false })
export class Infotour extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: 'Language', required: true })
  language_support: Types.ObjectId[];

  @Prop({ required: true })
  phone_number: string;

  @Prop({ required: true })
  souvenirs_available: boolean;

  @Prop({ required: true })
  wifi: boolean;

  @Prop({ required: true })
  parking_available: boolean;

  @Prop({ required: true })
  charging_stations: boolean;
}

export const InfotourSchema = SchemaFactory.createForClass(Infotour);
