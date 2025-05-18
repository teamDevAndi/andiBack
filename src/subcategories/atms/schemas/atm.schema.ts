import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ versionKey: false })
export class ATM extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Place', required: true })
  place_id: Types.ObjectId;

  @Prop({ required: true })
  bank_name: string;

  @Prop({ type: [Types.ObjectId], ref: 'Currency', required: true })
  currency_available: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Language', required: true })
  languages_available: Types.ObjectId[];

  @Prop({ required: true })
  accepts_foreign_cards: boolean;

  @Prop({ required: true })
  fee_for_foreign_cards: number;

  @Prop({ required: true })
  deposit_functionality: boolean;

  @Prop({ required: true })
  contactless_withdrawal: boolean;
}

export const ATMSchema = SchemaFactory.createForClass(ATM);
