import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Mall extends Place {
  @Prop({ required: true })
  number_of_stores: number;

  @Prop({ required: true })
  store_types: Languages[];

  @Prop({ required: true })
  parking_available: boolean;

  @Prop({ required: true })
  food_court_available: boolean;

  @Prop({ required: true })
  entertainment_area: Languages[];

  @Prop({ required: true })
  wifi: boolean;

  @Prop({ required: true })
  security_services: boolean;

  @Prop({ required: true })
  pet_friendly: boolean;

  @Prop({ required: true })
  atm_service: boolean;

  @Prop({ required: true })
  phone_number: string;
}

export const MallSchema = SchemaFactory.createForClass(Mall);
