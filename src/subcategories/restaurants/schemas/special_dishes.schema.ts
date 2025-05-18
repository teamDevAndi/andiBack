import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TranslationBase, TranslationBaseSchema } from 'src/common/schemas/translation.schema';

@Schema()
export class SpecialDishes extends Document {
  @Prop({ type: TranslationBaseSchema, required: true })
  name: TranslationBase;
}

export const SpecialDishesSchema = SchemaFactory.createForClass(SpecialDishes);
