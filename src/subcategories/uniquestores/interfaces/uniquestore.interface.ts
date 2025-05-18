import { Types } from 'mongoose';

export interface UniqueStore {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  specialization: Types.ObjectId[];
  price_range: number;
  store_size: number;
  exclusive_items: Types.ObjectId[];
  gift_wrapping_service: boolean;
  delivery_available: boolean;
  phone_number: string;
}
