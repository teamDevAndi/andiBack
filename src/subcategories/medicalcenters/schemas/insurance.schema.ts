import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TranslationBase, TranslationBaseSchema } from 'src/common/schemas/translation.schema';

@Schema()
export class Insurance extends Document {
  @Prop({ type: TranslationBaseSchema, required: true })
  name: TranslationBase;
}

export const InsuranceSchema = SchemaFactory.createForClass(Insurance);
