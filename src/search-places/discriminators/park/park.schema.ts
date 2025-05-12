import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Park extends Place {
  @Prop({ required: true })
  areaSize: number;

  @Prop({ required: true })
  facilities: Languages[];

  @Prop({ required: true })
  petFriendly: boolean;

  @Prop({ required: true })
  floraFaunaHighlights: Languages[];

  @Prop({ required: true })
  tips: Languages[];
}

export const ParkSchema = SchemaFactory.createForClass(Park);
