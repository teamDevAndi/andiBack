import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TranslationBase, TranslationBaseSchema } from 'src/common/schemas/translation.schema';

@Schema()
export class ExclusiveItem extends Document {
  @Prop({ type: TranslationBaseSchema, required: true })
  name: TranslationBase;
}

export const ExclusiveItemSchema = SchemaFactory.createForClass(ExclusiveItem);
