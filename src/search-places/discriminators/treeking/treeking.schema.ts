import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Treeking extends Place {
  @Prop({ type: Types.ObjectId, required: true })
  idPlace: Types.ObjectId;

  @Prop({ required: true })
  estimateDurationMinutes: number;

  @Prop({ required: true })
  distanceMeters: number;

  @Prop({ required: true })
  difficultLevel: number;

  @Prop({ required: true })
  maxAltitude: number;

  @Prop({ required: true })
  campingAllowed: boolean;

  @Prop({ required: true })
  wildlifeSighting: boolean;

  @Prop({ required: true })
  equipmentRequired: Languages[];

  @Prop({ required: true })
  tips: Languages[];
}

export const TreekingSchema = SchemaFactory.createForClass(Treeking);
