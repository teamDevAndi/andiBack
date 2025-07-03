import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class WaitlistNumbers extends Document {
  @Prop({ required: true, unique: true })
  number: string;
}

export const WaitlistNumbersSchema = SchemaFactory.createForClass(WaitlistNumbers);
