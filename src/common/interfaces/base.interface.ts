export interface Translation {
  [lang: string]: string;
  es: string;
  en: string;
  fr: string;
  ge: string;
}

export interface PopulatedPlaceBase {
  place_id: {
    description_place: Translation;
    costs: {
      mount: number;
      reason: Translation;
    }[];
  };
  transport_options?: Translation[];
  facilities?: Translation[];

  currency_available?: Translation[];
  languages_available?: Translation[];

  denomination?: Translation[];
  architectural_style?: Translation[];
  photography_policy?: Translation;
  nearby_facilities?: Translation[];

  language_support?: Translation[];

  vendor_types?: Translation[];
  tips?: Translation[];

  room_types?: Translation[];
  amenities?: Translation[];

  water_type?: Translation[];
  activities_allowed?: Translation[];
  flora_fauna_highlights?: Translation[];
  safety_information?: Translation[];

  service_type?: Translation[];
  payment_methods?: Translation[];

  store_types?: Translation[];
  entertainment_area?: Translation[];

  market_type?: Translation[];

  specialties?: Translation[];
  insurance_accepted?: Translation[];

  material_used?: Translation[];

  collection_type?: Translation[];

  security_features?: Translation[];
  vehicle_types_allowed?: Translation[];
  parking_type?: Translation[];

  cuisine_type?: Translation[];
  special_dishes?: Translation[];
  dietary_options?: Translation[];

  historical_period?: Translation[];

  sports_available?: Translation[];
  surface_type?: Translation[];

  attractions?: Translation[];

  product_categories?: Translation[];

  languages_offered?: Translation[];
  certifications?: Translation[];
  tour_types?: Translation[];

  transport_type?: Translation[];
  lines_available?: Translation[];

  equipment_required?: Translation[];

  specialization?: Translation[];
  exclusive_items?: Translation[];

  view_type?: Translation[];

}