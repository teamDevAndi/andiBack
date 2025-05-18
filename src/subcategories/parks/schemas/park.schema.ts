import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

@Schema()
export class Park extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: string;

  @Prop({ required: true })
  area_size: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Facility' }] })
  facilities: Types.ObjectId[];

  @Prop({ required: true })
  pet_friendly: boolean;

  @Prop({ type: Types.ObjectId, ref: 'FloraFauna', required: true })
  flora_fauna_highlights: string;

  @Prop({ type: Object, required: true })
  tips: Translation[];
}

export const ParkSchema = SchemaFactory.createForClass(Park);
