import { Types } from 'mongoose';

export interface Infotour {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  language_support: Types.ObjectId[];
  phone_number: string;
  souvenirs_available: boolean;
  wifi: boolean;
  parking_available: boolean;
  charging_stations: boolean;
}
