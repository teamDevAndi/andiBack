import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ versionKey: false })
export class Hotel extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: 'RoomType', required: true })
  room_types: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Amenity', required: true })
  amenities: Types.ObjectId[];

  @Prop({ required: true })
  check_in_time: string;

  @Prop({ required: true })
  check_out_time: string;

  @Prop({ required: true })
  parking_available: boolean;

  @Prop({ required: true })
  pet_friendly: boolean;

  @Prop({ type: [Types.ObjectId], ref: 'Language', required: true })
  language_support: Types.ObjectId[];

  @Prop({ required: true })
  distance_to_city_center: number;

  @Prop({ required: true })
  phone_number: string;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
