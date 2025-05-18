import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ versionKey: false })
export class TransportStop extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: 'TransportType', required: true })
  transport_type: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'LinesTransport', required: true })
  lines_available: Types.ObjectId[];

  @Prop({ required: true })
  shelter_available: boolean;

  @Prop({ required: true })
  seating_available: boolean;

  @Prop({ required: true })
  frequency: string;
}

export const TransportStopSchema = SchemaFactory.createForClass(TransportStop);
