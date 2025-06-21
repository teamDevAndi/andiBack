import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface Museum {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  collection_type: Translation;
  internal_guide: boolean;
  family_friendly: boolean;
  photography_policy: Translation[];
  shop_available: boolean;
  visit_duration: number;
  facilities: Translation;
  phone_number: string;
}
