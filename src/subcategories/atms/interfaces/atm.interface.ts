import { Types } from 'mongoose';

export interface ATM {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  bank_name: string;
  currency_available: Types.ObjectId[];
  languages_available: Types.ObjectId[];
  accepts_foreign_cards: boolean;
  fee_for_foreign_cards: number;
  deposit_functionality: boolean;
  contactless_withdrawal: boolean;
}
