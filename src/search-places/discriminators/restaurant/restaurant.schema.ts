import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Restaurant extends Place {
  @Prop({ required: true })
  cuisine_type: Languages[];

  @Prop({ required: true })
  price_range: string;

  @Prop({ required: true })
  reservation_required: boolean;

  @Prop({ required: true })
  special_dishes: Languages[];

  @Prop({ required: true })
  dietary_options: Languages[];

  @Prop({ required: true })
  outdoor_seating: boolean;

  @Prop({ required: true })
  pet_friendly: boolean;

  @Prop({ required: true })
  wifi_available: boolean;

  @Prop({ required: true })
  phone_number: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
