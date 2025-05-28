import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface UniqueStore {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  specialization: Translation[];
  price_range: number;
  store_size: number;
  exclusive_items: Translation[];
  gift_wrapping_service: boolean;
  delivery_available: boolean;
  phone_number: string;
}
