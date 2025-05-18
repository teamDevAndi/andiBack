import { Translation } from 'src/common/interfaces/base.interface';
import { Facility } from 'src/facilities/interfaces/facility.interface';


export interface SportArea {
  _id?: string;
  place_id: string;
  sports_available: string[];
  surface_type: string;
  facilities: Facility[];
  tips: Translation[];
  phone_number: string;
}