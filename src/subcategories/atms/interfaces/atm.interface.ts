import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface ATM {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  bank_name: string;
  currency_available: Translation;
  languages_available: Translation;
  accepts_foreign_cards: boolean;
  fee_for_foreign_cards: number;
  deposit_functionality: boolean;
  contactless_withdrawal: boolean;
}
