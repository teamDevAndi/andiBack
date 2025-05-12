import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class Atm extends Place {
  @Prop({ required: true })
  bank_name: string;

  @Prop({ required: true })
  currency_available: Languages[];

  @Prop({ required: true })
  languages_available: Languages[];

  @Prop({ required: true })
  accepts_foreign_cards: boolean;

  @Prop({ required: true })
  fee_for_foreign_cards: number;

  @Prop({ required: true })
  deposit_functionality: boolean;

  @Prop({ required: true })
  contactless_withdrawal: boolean;
}

export const AtmSchema = SchemaFactory.createForClass(Atm);
