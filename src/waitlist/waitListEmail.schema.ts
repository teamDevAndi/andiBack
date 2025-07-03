// src/waitlist/waitlist.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class WaitListEmail extends Document {
  @Prop({ required: true, unique: true })
  email: string;
}

export const WaitListEmailSchema = SchemaFactory.createForClass(WaitListEmail);
