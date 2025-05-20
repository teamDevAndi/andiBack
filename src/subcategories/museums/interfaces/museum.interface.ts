import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';
import { Facility } from 'src/facilities/interfaces/facility.interface';

export interface Museum {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  collection_type: Translation;
  internal_guide: boolean;
  family_friendly: boolean;
  photography_policy: Translation[];
  shop_available: boolean;
  visit_duration: number;
  facilities: Facility[];
  phone_number: string;
}
