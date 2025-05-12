import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Laundries extends Place {
  @Prop({ required: true })
  service_type: Languages[];

  @Prop({ required: true })
  pickup_delivery_service: boolean;

  @Prop({ required: true })
  price_per_kg: number;

  @Prop({ required: true })
  express_service: boolean;

  @Prop({ required: true })
  self_service_available: boolean;

  @Prop({ required: true })
  payment_methods: Languages[];

  @Prop({ required: true })
  parking_available: boolean;
}

export const LaundriesSchema = SchemaFactory.createForClass(Laundries);
