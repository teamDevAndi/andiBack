import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class UserData extends Document {
    @Prop({ type: Types.ObjectId })
    idUser: Types.ObjectId;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

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

export const UserDataSchema = SchemaFactory.createForClass(UserData);