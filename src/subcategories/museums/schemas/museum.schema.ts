import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';
import { Place } from 'src/places/interfaces/place.interface';

@Schema({ versionKey: false })
export class Museum extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Place;

  @Prop({ type: [Types.ObjectId], ref: 'CollectionTypes'})
  collection_type: Types.ObjectId[];

  @Prop({ default: false })
  internal_guide: boolean;

  @Prop({ default: false })
  family_friendly: boolean;

  @Prop({ type: Object, required: true })
  photography_policy: Translation[];

  @Prop({ default: false })
  shop_available: boolean;

  @Prop({ type: Number, min: 0 })
  visit_duration: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Facility' }] })
  facilities: Types.ObjectId[];

  @Prop()
  phone_number: string;
}

export const MuseumSchema = SchemaFactory.createForClass(Museum);
