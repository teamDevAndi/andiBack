import { Types } from 'mongoose';

export interface Parking {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  parking_type: Types.ObjectId;
  price_per_hour: number;
  price_per_day: number;
  payment_methods: Types.ObjectId[];
  security_features: Types.ObjectId[];
  vehicle_types_allowed: Types.ObjectId[];
  parking_capacity_total: number;
  height_restriction: number;
  valet_service: boolean;
}
