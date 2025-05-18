import { Translation } from 'src/common/interfaces/base.interface';
import { Facility } from 'src/facilities/interfaces/facility.interface';

export interface Park {
  _id?: string;
  place_id: string;
  area_size: number;
  facilities: Facility[];
  pet_friendly: boolean;
  flora_fauna_highlights: string[];
  tips: Translation[];
}
