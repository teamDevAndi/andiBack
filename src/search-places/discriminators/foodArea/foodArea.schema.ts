import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Languages } from 'src/search-places/types/place.type';
import { Place } from 'src/search-places/schemas/place.schema';

export class FoodArea extends Place {
  @Prop({ required: true })
  vendor_types: Languages[];

  @Prop({ required: true })
  number_of_stalls: number;

  @Prop({ required: true })
  price_range: number;

  @Prop({ required: true })
  seating_capacity: number;

  @Prop({ required: true })
  family_friendly: boolean;

  @Prop({ required: true })
  pet_friendly: boolean;

  @Prop({ required: true })
  tips: Languages[];
}

export const FoodAreaSchema = SchemaFactory.createForClass(FoodArea);
