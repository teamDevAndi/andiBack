import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Parking extends Place {
  @Prop({ required: true })
  parking_type: Languages[];

  @Prop({ required: true })
  price_per_hour: number;

  @Prop({ required: true })
  price_per_day: number;

  @Prop({ required: true })
  payment_methods: Languages[];

  @Prop({ required: true })
  security_features: Languages[];

  @Prop({ required: true })
  vehicle_types_allowed: Languages[];

  @Prop({ required: true })
  parking_capacity_total: number;

  @Prop({ required: true })
  height_restriction: number;

  @Prop({ required: true })
  valet_service: boolean;
}

export const ParkingSchema = SchemaFactory.createForClass(Parking);
