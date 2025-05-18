import { Types } from 'mongoose';

export interface Hotel {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  room_types: Types.ObjectId[];
  amenities: Types.ObjectId[];
  check_in_time: string;
  check_out_time: string;
  parking_available: boolean;
  pet_friendly: boolean;
  language_support: Types.ObjectId[];
  distance_to_city_center: number;
  phone_number: string;
}
