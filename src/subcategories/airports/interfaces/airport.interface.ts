import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';


export interface Airport {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  airport_code: string;
  transport_options: Translation;
  luggage_storage: boolean;
  wifi_available: boolean;
  facilities: Translation;
}
