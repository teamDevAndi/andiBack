import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface Hotel {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  room_types: Translation;
  amenities: Translation;
  check_in_time: string;
  check_out_time: string;
  parking_available: boolean;
  pet_friendly: boolean;
  language_support: Translation;
  distance_to_city_center: number;
  phone_number: string;
}
