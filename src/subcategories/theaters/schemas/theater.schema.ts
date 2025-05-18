import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Theater extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ required: true })
  seating_capacity: number;

  @Prop({ default: false })
  guided_tour_available: boolean;
}

export const TheaterSchema = SchemaFactory.createForClass(Theater);
