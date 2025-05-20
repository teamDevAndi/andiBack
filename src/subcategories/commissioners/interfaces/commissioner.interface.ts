import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface Commissioner {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  emergency_contact_number: number;
  tourist_assistance: boolean;
  language_support: Translation;
  detention_facilities: boolean;
  parking_available: boolean;
  lost_and_found_service: boolean;
}
