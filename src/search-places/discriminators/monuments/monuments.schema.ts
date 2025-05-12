import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Monuments extends Place {
  @Prop({ type: Date, required: true })
  construction_date: Date;

  @Prop({ required: true })
  material_used: Languages[];

  @Prop({ required: true })
  height: number;

  @Prop({ required: true })
  nearby_facilities: Languages[];
}

export const MonumentsSchema = SchemaFactory.createForClass(Monuments);
