import { Types } from 'mongoose';

export interface TouristAgency {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  tour_types: Types.ObjectId[];
  languages_offered: Types.ObjectId[];
  certifications: Types.ObjectId[];
  custom_tours: boolean;
  online_booking: boolean;
  payment_methods: Types.ObjectId[];
  insurance_included: boolean;
  group_discounts: boolean;
  pick_up_service: boolean;
  multi_day_tours: boolean;
}
