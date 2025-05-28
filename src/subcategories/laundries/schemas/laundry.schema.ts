import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Place } from 'src/places/interfaces/place.interface';

@Schema({ versionKey: false })
export class Laundry extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Place;

  @Prop({ type: [Types.ObjectId], ref: 'ServiceType', required: true })
  service_type: Types.ObjectId[];

  @Prop({ required: true })
  pickup_delivery_service: boolean;

  @Prop({ required: true })
  price_per_kg: number;

  @Prop({ required: true })
  express_service: boolean;

  @Prop({ required: true })
  self_service_available: boolean;

  @Prop({ type: [Types.ObjectId], ref: 'PaymentMethod', required: true })
  payment_methods: Types.ObjectId[];

  @Prop({ required: true })
  parking_available: boolean;
}

export const LaundrySchema = SchemaFactory.createForClass(Laundry);
