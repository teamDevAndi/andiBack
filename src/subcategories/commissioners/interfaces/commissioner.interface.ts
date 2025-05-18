import { Types } from 'mongoose';

export interface Commissioner {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  emergency_contact_number: number;
  tourist_assistance: boolean;
  language_support: Types.ObjectId[];
  detention_facilities: boolean;
  parking_available: boolean;
  lost_and_found_service: boolean;
}
