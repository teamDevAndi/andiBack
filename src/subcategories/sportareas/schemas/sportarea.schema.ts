import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

@Schema({ versionKey: false })
export class SportArea extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Sports' }] })
  sports_available: string[];

  @Prop({ type: Types.ObjectId, ref: 'SurfaceTypes' })
  surface_type: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Facility' }] })
  facilities: string[];

  @Prop({ type: [Object] })
  tips?: Translation[];

  @Prop({ type: String })
  phone_number: string;
}

export const SportAreaSchema = SchemaFactory.createForClass(SportArea);