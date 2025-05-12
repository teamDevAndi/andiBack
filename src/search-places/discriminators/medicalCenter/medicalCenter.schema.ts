import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class MedicalCenter extends Place {
  @Prop({ required: true })
  specialties: Languages[];

  @Prop({ required: true })
  emergency_service: boolean;

  @Prop({ required: true })
  appointment_required: boolean;

  @Prop({ required: true })
  insurance_accepted: Languages[];

  @Prop({ required: true })
  pharmacy_available: boolean;

  @Prop({ required: true })
  ambulance_service: boolean;

  @Prop({ required: true })
  language_support: Languages[];

  @Prop({ required: true })
  parking_available: boolean;

  @Prop({ required: true })
  telemedicine_available: boolean;

  @Prop({ required: true })
  phone_number: string;
}

export const MedicalCenterSchema = SchemaFactory.createForClass(MedicalCenter);
