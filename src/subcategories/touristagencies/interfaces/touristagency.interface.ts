import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface TouristAgency {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  tour_types: Translation[];
  languages_offered: Translation[];
  certifications: Translation[];
  custom_tours: boolean;
  online_booking: boolean;
  payment_methods: Translation[];
  insurance_included: boolean;
  group_discounts: boolean;
  pick_up_service: boolean;
  multi_day_tours: boolean;
}
