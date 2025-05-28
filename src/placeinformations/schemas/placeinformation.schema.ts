import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema()
export class PlaceInformation extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  id_place: Types.ObjectId;

  @Prop({ required: true })
  historical: string;

  @Prop({ required: true })
  architectural: string;

  @Prop({ required: true })
  cultural: string;

  @Prop({ required: true })
  popular: string;
}

export const PlaceInformationSchema = SchemaFactory.createForClass(PlaceInformation);
