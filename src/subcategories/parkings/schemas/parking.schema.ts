import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Place } from 'src/places/interfaces/place.interface';

@Schema({ versionKey: false })
export class Parking extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Place;

  @Prop({ type: [Types.ObjectId], ref: 'ParkingType', required: true })
  parking_type: Types.ObjectId;

  @Prop({ required: true })
  price_per_hour: number;

  @Prop({ required: true })
  price_per_day: number;

  @Prop({ type: [Types.ObjectId], ref: 'PaymentMethod', required: true })
  payment_methods: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'SecurityFeature' })
  security_features: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'VehicleType' })
  vehicle_types_allowed: Types.ObjectId[];

  @Prop({ required: true })
  parking_capacity_total: number;

  @Prop({ required: true })
  height_restriction: number;

  @Prop({ required: true })
  valet_service: boolean;
}

export const ParkingSchema = SchemaFactory.createForClass(Parking);
