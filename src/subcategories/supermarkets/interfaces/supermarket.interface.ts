import { Types } from 'mongoose';

export interface Supermarket {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  product_categories: Types.ObjectId[];
  parking_available: boolean;
  payment_methods: Types.ObjectId[];
  pharmacy_available: boolean;
}
