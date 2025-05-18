import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Supermarket extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: 'ProductCategory' })
  product_categories: Types.ObjectId[];

  @Prop({ type: Boolean, default: false })
  parking_available: boolean;

  @Prop({ type: [Types.ObjectId], ref: 'PaymentMethod' })
  payment_methods: Types.ObjectId[];

  @Prop({ type: Boolean, default: false })
  pharmacy_available: boolean;
}

export const SupermarketSchema = SchemaFactory.createForClass(Supermarket);
