import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({ timestamps: true })
export class Users extends Document {

    @Prop({ required: true, unique: true })
    email: string;
    
    @Prop({ required: true })
    password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);