import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

@Schema()
export class Facility extends Document {
  @Prop({ type: Object, required: true })
  name: Translation;

  @Prop({ required: true })
  icon: string;
}

export const FacilitySchema = SchemaFactory.createForClass(Facility);
