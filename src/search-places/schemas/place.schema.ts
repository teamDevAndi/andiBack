import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"
import { Costs, Languages, Times } from "../types/place.type";

@Schema({ discriminatorKey: "category", timestamps: true })
export class Place extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    picturePrincipal: string;

    @Prop({ required: true })
    category: string;

    @Prop({ required: true })
    subCategory: string;

    @Prop({ required: true })
    guideRequired: boolean;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    times: Times[];

    @Prop({ required: true })
    costs: Costs[];

    @Prop({ required: true })
    description: Languages[];

    @Prop({ required: true })
    labels: string[];
}

export const PlaceSchema = SchemaFactory.createForClass(Place);