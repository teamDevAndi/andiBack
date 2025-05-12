import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Commissioner extends Place {
  @Prop({ required: true })
  emergency_contact_number: number;

  @Prop({ required: true })
  tourist_assistance: boolean;

  @Prop({ required: true })
  language_support: Languages[];

  @Prop({ required: true })
  detention_facilities: boolean;

  @Prop({ required: true })
  parking_available: boolean;

  @Prop({ required: true })
  lost_and_found_service: boolean;
}

export const CommissionerSchema = SchemaFactory.createForClass(Commissioner);
