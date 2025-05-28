import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface Market {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  market_type: Translation;
  number_of_stalls: number;
  local_producers_only: boolean;
  cash_only: boolean;
  bargaining_allowed: boolean;
  food_court_available: boolean;
  pet_friendly: boolean;
  tips: Translation[];
}
