import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Place } from 'src/places/interfaces/place.interface';

@Schema({ versionKey: false })
export class Cafe extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Place;

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
