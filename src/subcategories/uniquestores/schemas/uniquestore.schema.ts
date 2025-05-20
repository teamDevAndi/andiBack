import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Place } from 'src/places/interfaces/place.interface';

@Schema()
export class UniqueStore extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Place;

  @Prop({ type: [Types.ObjectId], ref: 'Specialization'})
  specialization: Types.ObjectId[];

  @Prop({ type: Number })
  price_range: number;

  @Prop({ type: Number })
  store_size: number;

  @Prop({ type: [Types.ObjectId], ref: 'ExclusiveItem'})
  exclusive_items: Types.ObjectId[];

  @Prop({ type: Boolean, default: false })
  gift_wrapping_service: boolean;

  @Prop({ type: Boolean, default: false })
  delivery_available: boolean;

  @Prop({ type: String })
  phone_number: string;
}

export const UniqueStoreSchema = SchemaFactory.createForClass(UniqueStore);
