import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Place } from 'src/places/interfaces/place.interface';

@Schema()
export class MedicalCenter extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Place;

  @Prop({ type: [Types.ObjectId], ref: 'MedicalSpeciality' })
  specialties: Types.ObjectId[];

  @Prop({ type: Boolean })
  emergency_service: boolean;

  @Prop({ type: Boolean })
  appointment_required: boolean;

  @Prop({ type: [Types.ObjectId], ref: 'Insurance' })
  insurance_accepted: Types.ObjectId[];

  @Prop({ type: Boolean })
  pharmacy_available: boolean;

  @Prop({ type: Boolean })
  ambulance_service: boolean;

  @Prop({ type: [Types.ObjectId], ref: 'Language' })
  language_support: Types.ObjectId[];

  @Prop({ type: Boolean })
  parking_available: boolean;

  @Prop({ type: Boolean })
  telemedicine_available: boolean;

  @Prop({ type: String })
  phone_number: string;
}

export const MedicalCenterSchema = SchemaFactory.createForClass(MedicalCenter);
