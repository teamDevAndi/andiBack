import { Prop, Schema } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema({ _id: false, id: false })
export class TranslationBase {
  @Prop({ type: String, required: true })
  es: string;

  @Prop({ type: String, required: true })
  en: string;

  @Prop({ type: String, required: true })
  fr: string;

  @Prop({ type: String, required: true })
  ge: string;
}

export const TranslationBaseSchema = new MongooseSchema({
  es: { type: String, required: true },
  en: { type: String, required: true },
  fr: { type: String, required: true },
  ge: { type: String, required: true },
});
