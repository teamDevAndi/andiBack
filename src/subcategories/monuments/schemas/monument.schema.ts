import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Place } from 'src/places/interfaces/place.interface';

@Schema()
export class Monument extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Place;

  @Prop({ type: Date, required: true })
  construction_date: Date;

  @Prop({ type: [Types.ObjectId], ref: 'MaterialUsed' })
  material_used: Types.ObjectId[];

  @Prop({ type: Number, required: true })
  height: number;

  @Prop({ type: [Types.ObjectId], ref: 'Facility' })
  nearby_facilities: Types.ObjectId[];
}

export const MonumentSchema = SchemaFactory.createForClass(Monument);
