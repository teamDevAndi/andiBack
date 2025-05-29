import { Translation } from 'src/common/interfaces/base.interface';


export interface SportArea {
  _id?: string;
  place_id: string;
  sports_available: Translation[];
  surface_type: Translation;
  facilities: Translation;
  tips: Translation[];
  phone_number: string;
}