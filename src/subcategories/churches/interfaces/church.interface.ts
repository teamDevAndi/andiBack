import { Translation } from 'src/common/interfaces/base.interface';
import { Facility } from 'src/facilities/interfaces/facility.interface';

export interface Church {
  _id?: string;
  place_id: string;
  denomination: string;
  construction_date: Date;
  architectural_style: string;
  internal_guide: boolean;
  photography_policy: Translation[];
  facilities: Facility[];
  nearby_facilities: Facility[];
  phone_number: string;
}
