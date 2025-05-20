import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';
import { Place } from 'src/places/interfaces/place.interface';

@Schema({ timestamps: true })
export class Square extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Place;

  @Prop({ type: [Types.ObjectId], ref: 'Attraction', required: true })
  attractions: Types.ObjectId;

  @Prop({ required: true })
  area_size: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Facility' }] })
  nearby_facilities: Types.ObjectId[];

  @Prop({ type: [Object] })
  tips?: Translation[];
}

export const SquareSchema = SchemaFactory.createForClass(Square);
