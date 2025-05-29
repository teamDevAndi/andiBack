import { Translation } from 'src/common/interfaces/base.interface';
import { Types } from 'mongoose';

export interface Church {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  denomination: Translation;
  construction_date: Date;
  architectural_style: Translation[];
  internal_guide: boolean;
  photography_policy: Translation[];
  facilities: Translation;
  nearby_facilities: Translation;
  phone_number: string;
}
