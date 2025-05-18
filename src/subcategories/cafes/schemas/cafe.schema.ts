import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Cafe extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop()
  price_range: number;

  @Prop()
  pet_friendly: boolean;
  
  @Prop()
  outdoor_seating: boolean;
  
  @Prop()
  wifi_available: boolean;

  @Prop()
  work_friendly: boolean;

  @Prop()
  phone_number: string;
}

export const CafeSchema = SchemaFactory.createForClass(Cafe);
