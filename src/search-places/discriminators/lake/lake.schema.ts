import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Lake extends Place {
  @Prop({ required: true })
  surfaceAreaLake: number;

  @Prop({ required: true })
  maxDepth: number;

  @Prop({ required: true })
  altitude: number;

  @Prop({ required: true })
  waterType: Languages[];

  @Prop({ required: true })
  activitiesAllowed: Languages[];

  @Prop({ required: true })
  floraFaunaHighlights: Languages[];

  @Prop({ required: true })
  facilities: Languages[];

  @Prop({ required: true })
  safetyInformation: Languages[];

  @Prop({ required: true })
  tips: Languages[];
}

export const LakeSchema = SchemaFactory.createForClass(Lake);
