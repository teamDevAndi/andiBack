import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Square extends Place {
  @Prop({ required: true })
  attractions: Languages[];

  @Prop({ required: true })
  areaSize: number;

  @Prop({ required: true })
  nearbyFacilities: Languages[];

  @Prop({ type: [Object], required: true })
  tips: Languages[];
}

export const SquareSchema = SchemaFactory.createForClass(Square);
