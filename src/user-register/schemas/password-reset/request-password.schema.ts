import { Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class RequestPassword extends Document {
    @Prop({ required: true, unique: true })
    email: string;
}