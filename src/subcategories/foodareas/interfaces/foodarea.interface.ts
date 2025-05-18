import { Translation } from 'src/common/interfaces/base.interface';

export interface FoodArea {
  _id?: string;
  place_id: string;
  vendor_types: string[];
  number_of_stalls: number;
  price_range: number;
  seating_capacity: number;
  family_friendly: boolean;
  pet_friendly: boolean;
  tips: Translation[];
}
