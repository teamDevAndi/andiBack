import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

@Schema()
export class Ruin extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'HistoricalPeriod', required: true })
  historical_period: Types.ObjectId;

  @Prop({ default: false })
  internal_guide: boolean;

  @Prop({ type: Number })
  conservation_status: number;

  @Prop({ type: Number })
  visit_duration: number;

  @Prop({ type: Object, required: true })
  photography_policy: Translation;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Facility' }] })
  nearby_facilities: Types.ObjectId[];
}

export const RuinSchema = SchemaFactory.createForClass(Ruin);
