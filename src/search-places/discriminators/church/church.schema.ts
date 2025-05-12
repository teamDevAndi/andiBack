import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Church extends Place {
  @Prop({ required: true })
  denomination: Languages[];

  @Prop({ type: Date, required: true })
  construction_date: Date;

  @Prop({ required: true })
  architectural_style: Languages[];

  @Prop({ required: true })
  internal_guide: boolean;

  @Prop({ required: true })
  photography_policy: Languages;

  @Prop({ required: true })
  facilities: Languages[];

  @Prop({ required: true })
  nearby_facilities: Languages[];

  @Prop({ required: true })
  phone_number: string;
}

export const ChurchSchema = SchemaFactory.createForClass(Church);
