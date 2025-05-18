import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

@Schema()
export class Viewpoint extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ required: true })
  altitude_meters: number;

  @Prop({ type: Types.ObjectId, ref: 'ViewType', required: true })
  view_type: string;

  @Prop({ required: true })
  has_telescope: boolean;

  @Prop({ type: Object, required: true })
  tips: Translation[];
}

export const ViewPointSchema = SchemaFactory.createForClass(Viewpoint);
