import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ versionKey: false })
export class Commissioner extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ required: true })
  emergency_contact_number: number;

  @Prop({ required: true })
  tourist_assistance: boolean;

  @Prop({ type: [Types.ObjectId], ref: 'Language', required: true })
  language_support: Types.ObjectId[];

  @Prop({ required: true })
  detention_facilities: boolean;

  @Prop({ required: true })
  parking_available: boolean;

  @Prop({ required: true })
  lost_and_found_service: boolean;
}

export const CommissionerSchema = SchemaFactory.createForClass(Commissioner);
