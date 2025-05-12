import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Market extends Place {
  @Prop({ required: true })
  market_type: Languages[];

  @Prop({ required: true })
  number_of_stalls: number;

  @Prop({ required: true })
  local_producers_only: boolean;

  @Prop({ required: true })
  cash_only: boolean;

  @Prop({ required: true })
  bargaining_allowed: boolean;

  @Prop({ required: true })
  food_court_available: boolean;

  @Prop({ required: true })
  pet_friendly: boolean;

  @Prop({ required: true })
  tips: Languages[];
}

export const MarketSchema = SchemaFactory.createForClass(Market);
