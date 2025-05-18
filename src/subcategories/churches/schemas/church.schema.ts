import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

@Schema()
export class Church extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: string;

  @Prop({ type: Types.ObjectId, ref: 'Denomination', required: true })
  denomination: string;

  @Prop({ type: Date, required: true })
  construction_date: Date;

  @Prop({ type: Types.ObjectId, ref: 'ArchitecturalStyle', required: true })
  architectural_style: string;

  @Prop({ required: true })
  internal_guide: boolean;

  @Prop({ type: Object, required: true })
  photography_policy: Translation;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Facility' }] })
  facilities: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Facility' }] })
  nearby_facilities: Types.ObjectId[];

  @Prop({ required: true })
  phone_number: string;
}

export const ChurchSchema = SchemaFactory.createForClass(Church);
