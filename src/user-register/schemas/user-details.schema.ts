import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class UserDetails extends Document {
  @Prop({ type: Types.ObjectId, required: true })
  user_Id: Types.ObjectId;

  @Prop({ required: true })
  nationality: string;

  @Prop({ required: true })
  age: number;
  
  @Prop({ type: Number, default: null })
  verificationCode: number | null;

  @Prop({ type: Date, default: null })
  verificationCodeExpiresAt: Date | null;

  @Prop({ required: true, default: false })
  verificationStatus: boolean;

  @Prop({ type: String, default: null })
  resetCode: string | null;

  @Prop({ type: Date, default: null })
  resetCodeExpiresAt: Date | null;

  @Prop({ required: true, default: false })
  resetStatus: boolean;
}

export const UserDetailsSchema = SchemaFactory.createForClass(UserDetails);