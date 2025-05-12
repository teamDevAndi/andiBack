import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class InfoTour extends Place {
  @Prop({ required: true })
  language_support: Languages[];

  @Prop({ required: true })
  Phone_Number: string;

  @Prop({ required: true })
  souvenirs_available: boolean;

  @Prop({ required: true })
  wifi_available: boolean;

  @Prop({ required: true })
  parking_available: boolean;

  @Prop({ required: true })
  charging_stations: boolean;
}

export const InfoTourSchema = SchemaFactory.createForClass(InfoTour);
