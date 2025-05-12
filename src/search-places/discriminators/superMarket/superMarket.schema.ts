import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class SuperMarket extends Place {
  @Prop({ required: true })
  product_categories: Languages[];

  @Prop({ required: true })
  parking_available: boolean;

  @Prop({ required: true })
  payment_methods: Languages[];

  @Prop({ required: true })
  pharmacy_available: boolean;
}

export const SuperMarketSchema = SchemaFactory.createForClass(SuperMarket);
