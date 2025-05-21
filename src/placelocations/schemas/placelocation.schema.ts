import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { Place } from 'src/places/interfaces/place.interface';

@Schema()
export class PlaceLocation extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  id_place: Place;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop({ type: [String] })
  sub_category: string[];
}

export const PlaceLocationSchema = SchemaFactory.createForClass(PlaceLocation);
