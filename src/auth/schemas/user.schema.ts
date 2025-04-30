import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ default: false })
    verificationStatus: boolean;

    @Prop({ type: String, default: null })
    verificationCode: string | null;
    
    @Prop({ type: Date, default: null })
    codeExpiresAt: Date | null;      

}

export const UserSchema = SchemaFactory.createForClass(User);
