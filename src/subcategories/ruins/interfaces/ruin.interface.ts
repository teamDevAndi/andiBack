import { Translation } from 'src/common/interfaces/base.interface';
import { Types } from 'mongoose';

export interface Ruin {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  historical_period: Translation[];
  internal_guide: boolean;
  conservation_status: number;
  visit_duration: number;
  photography_policy: Translation[];
  nearby_facilities: Translation;
}
