import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface Mall {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  number_of_stores: number;
  store_types: Translation;
  parking_available: boolean;
  food_court_available: boolean;
  entertainment_area: Translation;
  wifi_available: boolean;
  security_services: boolean;
  pet_friendly: boolean;
  atm_service: boolean;
  phone_number: string;
}
