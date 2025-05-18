import { Types } from 'mongoose';
import { Facility } from 'src/facilities/interfaces/facility.interface';


export interface Airport {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  airport_code: string;
  transport_options: Types.ObjectId[];
  luggage_storage: boolean;
  wifi_available: boolean;
  facilities: Facility[];
}
