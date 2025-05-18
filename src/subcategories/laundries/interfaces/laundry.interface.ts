import { Types } from 'mongoose';

export interface Laundry {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  service_type: Types.ObjectId[];
  pickup_delivery_service: boolean;
  price_per_kg: number;
  express_service: boolean;
  self_service_available: boolean;
  payment_methods: Types.ObjectId[];
  parking_available: boolean;
}
