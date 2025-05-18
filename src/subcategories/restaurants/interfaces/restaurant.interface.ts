export interface Restaurant {
  _id?: string;
  place_id: string;
  cuisine_type: string[];
  price_range: number;
  reservation_required: boolean;
  special_dishes: string[];
  dietary_options: string[];
  outdoor_seating: boolean;
  pet_friendly: boolean;
  wifi_available: boolean;
  phone_number: string;
}
