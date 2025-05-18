import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Mall extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ type: Number, required: true })
  number_of_stores: number;

  @Prop({ type: [Types.ObjectId], ref: 'StoreType' })
  store_types: Types.ObjectId[];

  @Prop({ type: Boolean, default: false })
  parking_available: boolean;

  @Prop({ type: Boolean, default: false })
  food_court_available: boolean;

  @Prop({ type: [Types.ObjectId], ref: 'EntertainmentArea' })
  entertainment_area: Types.ObjectId[];

  @Prop({ type: Boolean, default: false })
  wifi_available: boolean;

  @Prop({ type: Boolean, default: false })
  security_services: boolean;

  @Prop({ type: Boolean, default: false })
  pet_friendly: boolean;

  @Prop({ type: Boolean, default: false })
  atm_service: boolean;

  @Prop({ type: String })
  phone_number: string;
}

export const MallSchema = SchemaFactory.createForClass(Mall);
