import { Translation } from "src/common/interfaces/base.interface";

export interface Restaurant {
  _id?: string;
  place_id: string;
  cuisine_type: Translation[];
  price_range: number;
  reservation_required: boolean;
  special_dishes: Translation[];
  dietary_options: Translation[];
  outdoor_seating: boolean;
  pet_friendly: boolean;
  wifi_available: boolean;
  phone_number: string;
}
