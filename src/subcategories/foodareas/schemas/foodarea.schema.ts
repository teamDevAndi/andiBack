import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

@Schema()
export class FoodArea extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: 'VendorType' })
  vendor_types: Types.ObjectId[];

  @Prop()
  number_of_stalls: number;

  @Prop()
  price_range: number;

  @Prop()
  seating_capacity: number;

  @Prop()
  family_friendly: boolean;

  @Prop()
  pet_friendly: boolean;

  @Prop({ type: Object, required: true })
  tips: Translation[];
}

export const FoodAreaSchema = SchemaFactory.createForClass(FoodArea);
