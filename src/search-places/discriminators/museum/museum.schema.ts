import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Museum extends Place {
  @Prop({ required: true })
  collection_type: Languages[];

  @Prop({ required: true })
  internal_guide: boolean;

  @Prop({ required: true })
  family_friendly: boolean;

  @Prop({ required: true })
  photography_policy: Languages[];

  @Prop({ required: true })
  shop_available: boolean;

  @Prop({ required: true })
  visit_duration: number;

  @Prop({ required: true })
  facilities: Languages[];

  @Prop({ required: true })
  phone_number: string;
}

export const MuseumSchema = SchemaFactory.createForClass(Museum);
