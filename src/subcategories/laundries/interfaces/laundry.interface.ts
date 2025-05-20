import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface Laundry {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  service_type: Translation;
  pickup_delivery_service: boolean;
  price_per_kg: number;
  express_service: boolean;
  self_service_available: boolean;
  payment_methods: Translation;
  parking_available: boolean;
}
