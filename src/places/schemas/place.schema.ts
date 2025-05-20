import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';


export type PlaceDocument = Place & Document;

export class TimeRange {
  @Prop({ required: true })
  day_start_range: number;

  @Prop({ required: true })
  day_end_range: number;

  @Prop({ required: true })
  open: string;

  @Prop({ required: true })
  close: string;
}

export class Cost {
  @Prop({ type: Types.ObjectId, required: true })
  reason: Types.ObjectId[];

  @Prop({ required: true })
  mount: number;
}

@Schema({ timestamps: true })
export class Place {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  picture_principal: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  sub_category: string;

  @Prop({ required: true, enum: ['included', 'not_required', 'optional'] })
  guidance_required: 'included' | 'not_required' | 'optional';

  @Prop({ required: true })
  address: string;

  @Prop({ type: [Object], default: [] })
  times: TimeRange[];

  @Prop({ type: [Types.ObjectId], default: [] })
  costs: Cost[];

  @Prop({ type: Object, required: true })
  description_place: Translation;

  @Prop({ type: [String], default: [] })
  labels: string[];

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  code_hash: string;
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
