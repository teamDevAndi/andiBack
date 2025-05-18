import { Types } from 'mongoose';

export interface MedicalCenter {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  specialties: Types.ObjectId[];
  emergency_service: boolean;
  appointment_required: boolean;
  insurance_accepted: Types.ObjectId[];
  pharmacy_available: boolean;
  ambulance_service: boolean;
  language_support: Types.ObjectId[];
  parking_available: boolean;
  telemedicine_available: boolean;
  phone_number: string;
}
