import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class UserDetails extends Document {
  @Prop({ type: Types.ObjectId })
  user_Id: Types.ObjectId;

  @Prop({ required: true })
  nationality: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  verificationCode: number;

  @Prop({ required: true })
  verificationCodeExpiresAt: Date;

  @Prop({ required: true, default: false })
  verificationStatus: boolean;
}

export const UserDetailsSchema = SchemaFactory.createForClass(UserDetails);
