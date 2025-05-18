import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ versionKey: false })
export class TouristAgency extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: 'TourType', required: true })
  tour_types: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Language', required: true })
  languages_offered: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Certification', required: true })
  certifications: Types.ObjectId[];

  @Prop({ required: true })
  custom_tours: boolean;

  @Prop({ required: true })
  online_booking: boolean;

  @Prop({ type: [Types.ObjectId], ref: 'PaymentMethod', required: true })
  payment_methods: Types.ObjectId[];

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
