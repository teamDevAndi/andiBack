
import { Translation } from 'src/common/interfaces/base.interface';

export interface MedicalCenter {
  _id?: string;
  place_id: string;
  specialties: Translation[];
  emergency_service: boolean;
  appointment_required: boolean;
  insurance_accepted: Translation;
  pharmacy_available: boolean;
  ambulance_service: boolean;
  language_support: Translation;
  parking_available: boolean;
  telemedicine_available: boolean;
  phone_number: string;
}
