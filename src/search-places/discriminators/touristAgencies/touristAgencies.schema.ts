import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

@Schema()
export class TouristAgency extends Place {
  @Prop({ required: true })
  tour_types: Languages[];

  @Prop({ required: true })
  languages_offered: Languages[];

  @Prop({ required: true })
  certifications: Languages[];

  @Prop({ required: true })
  custom_tours: boolean;

  @Prop({ required: true })
  online_booking: boolean;

  @Prop({ required: true })
  payment_methods: Languages[];

  @Prop({ required: true })
  insurance_included: boolean;

  @Prop({ required: true })
  group_discounts: boolean;

  @Prop({ required: true })
  pick_up_service: boolean;

  @Prop({ required: true })
  multi_day_tours: boolean;
}

export const TouristAgencySchema = SchemaFactory.createForClass(TouristAgency);
