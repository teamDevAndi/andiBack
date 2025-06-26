import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class PlaceRequest extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  placeName: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  whatsapp: string;

  @Prop({ required: true })
  description: string;
}

export const PlaceRequestSchema = SchemaFactory.createForClass(PlaceRequest);