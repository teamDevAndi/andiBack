import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Ruins extends Place {
  @Prop({ required: true })
  historical_period: Languages[];

  @Prop({ required: true })
  internal_guide: boolean;

  @Prop({ required: true })
  conservation_status: number;

  @Prop({ required: true })
  visit_duration: number;

  @Prop({ required: true })
  photography_policy: Languages[];

  @Prop({ required: true })
  nearby_facilities: Languages[];
}

export const RuinsSchema = SchemaFactory.createForClass(Ruins);
