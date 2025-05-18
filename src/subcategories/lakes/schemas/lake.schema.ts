import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

@Schema({ timestamps: true })
export class Lake extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ required: true })
  surface_area_lake: number;

  @Prop({ required: true })
  max_depth: number;

  @Prop({ required: true })
  altitude: number;

  @Prop({ type: Types.ObjectId, ref: 'WaterType', required: true })
  water_type: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ActivitiesAllowed' }] })
  activities_allowed: string[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'FloraFauna' }] })
  flora_fauna_highlights: string[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Facility' }] })
  facilities: Types.ObjectId[];

  @Prop({ type: [Object] })
  safety_information?: Translation[];

  @Prop({ type: [Object] })
  tips?: Translation[];
}

export const LakeSchema = SchemaFactory.createForClass(Lake);