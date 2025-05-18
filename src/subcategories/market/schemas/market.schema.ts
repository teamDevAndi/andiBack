import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

@Schema()
export class Market extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: 'MarketType' })
  market_type: Types.ObjectId[];

  @Prop({ type: Number })
  number_of_stalls: number;

  @Prop({ type: Boolean })
  local_producers_only: boolean;

  @Prop({ type: Boolean })
  cash_only: boolean;

  @Prop({ type: Boolean })
  bargaining_allowed: boolean;

  @Prop({ type: Boolean })
  food_court_available: boolean;

  @Prop({ type: Boolean })
  pet_friendly: boolean;

  @Prop({ type: [Object] })
  tips?: Translation[];
}

export const MarketSchema = SchemaFactory.createForClass(Market);
