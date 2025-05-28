import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Place } from 'src/places/interfaces/place.interface';

@Schema()
export class Restaurant extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Place;

  @Prop({ type: [Types.ObjectId], ref: 'CuisineType' })
  cuisine_type: Types.ObjectId[];

  @Prop()
  price_range: number;

  @Prop()
  reservation_required: boolean;

  @Prop({ type: [Types.ObjectId], ref: 'SpecialDishes' })
  special_dishes: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'DietaryOptions' })
  dietary_options: Types.ObjectId[];

  @Prop()
  outdoor_seating: boolean;

  @Prop()
  pet_friendly: boolean;

  @Prop()
  wifi_available: boolean;

  @Prop()
  phone_number: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
