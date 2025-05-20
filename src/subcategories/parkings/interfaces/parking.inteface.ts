import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface Parking {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  parking_type: Translation[];
  price_per_hour: number;
  price_per_day: number;
  payment_methods: Translation[];
  security_features: Translation;
  vehicle_types_allowed: Translation;
  parking_capacity_total: number;
  height_restriction: number;
  valet_service: boolean;
}
