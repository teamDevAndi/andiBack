import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class UniqueStore extends Place {
  @Prop({ required: true })
  specialization: Languages[];

  @Prop({ required: true })
  price_range: number;

  @Prop({ required: true })
  store_size: number;

  @Prop({ required: true })
  exclusive_items: Languages[];

  @Prop({ required: true })
  gift_wrapping_service: boolean;

  @Prop({ required: true })
  delivery_available: boolean;

  @Prop({ required: true })
  phone_number: string;
}

export const UniqueStoreSchema = SchemaFactory.createForClass(UniqueStore);
