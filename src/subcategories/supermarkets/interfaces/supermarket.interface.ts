import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface Supermarket {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  product_categories: Translation[];
  parking_available: boolean;
  payment_methods: Translation[];
  pharmacy_available: boolean;
}
