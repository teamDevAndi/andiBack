import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Coordinate {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  lng: number;
}

export const CoordinateSchema = SchemaFactory.createForClass(Coordinate);

@Schema({ timestamps: true })
export class TransportLine extends Document {
  @Prop({ type: Types.ObjectId, ref: 'TransportTypes', required: true })
  id_transport: Types.ObjectId;

  @Prop({ required: true })
  code: string;

  @Prop({ type: [CoordinateSchema], required: true })
  route: Coordinate[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Place' }] })
  nearby_places: Types.ObjectId[];
}

export const TransportLineSchema = SchemaFactory.createForClass(TransportLine);

TransportLineSchema.virtual('places', {
  ref: 'Place',
  localField: 'nearby_places',
  foreignField: '_id',
  justOne: false,
});
TransportLineSchema.virtual('place_location', {
  ref: 'PlaceLocation',
  localField: 'nearby_places',
  foreignField: 'id_place',
  justOne: false,
});
TransportLineSchema.set('toObject', { virtuals: true });
TransportLineSchema.set('toJSON', { virtuals: true });
