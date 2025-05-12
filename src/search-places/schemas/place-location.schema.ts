import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class PlaceLocation extends Document {
  @Prop({ type: Types.ObjectId, required: true })
  idPlace: Types.ObjectId;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;
}

export const PlaceLocationSchema = SchemaFactory.createForClass(PlaceLocation);
