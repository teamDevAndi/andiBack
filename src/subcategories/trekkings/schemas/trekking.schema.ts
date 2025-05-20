import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';
import { Place } from 'src/places/interfaces/place.interface';

@Schema()
export class Trekking extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Place;

  @Prop({ required: true })
  estimated_duration_minutes: number;

  @Prop({ required: true })
  distance_meters: number;

  @Prop({ required: true })
  difficult_level: number;

  @Prop({ required: true })
  max_altitude_meters: number;

  @Prop({ required: true })
  camping_allowed: boolean;

  @Prop({ required: true })
  wildlife_sightings: boolean;

  @Prop({ type: [Types.ObjectId], ref: 'Equipment', required: true })
  equipment_required: Types.ObjectId[];

  @Prop({ type: [Object], required: true })
  tips: Translation[];
}

export const TrekkingSchema = SchemaFactory.createForClass(Trekking);
