import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface Infotour {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  language_support: Translation;
  phone_number: string;
  souvenirs_available: boolean;
  wifi: boolean;
  parking_available: boolean;
  charging_stations: boolean;
}
