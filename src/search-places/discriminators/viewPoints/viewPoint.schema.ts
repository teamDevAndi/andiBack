import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class ViewPoints extends Place {
  @Prop({ required: true })
  altitudeMeters: number;

  @Prop({ required: true })
  viewType: Languages[];

  @Prop({ required: true })
  hasTelescope: boolean;

  @Prop({ required: true })
  tips: Languages[];
}

export const ViewPointsSchema = SchemaFactory.createForClass(ViewPoints);
