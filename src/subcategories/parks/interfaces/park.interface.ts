import { Translation } from 'src/common/interfaces/base.interface';

export interface Park {
  _id?: string;
  place_id: string;
  area_size: number;
  facilities: Translation;
  pet_friendly: boolean;
  flora_fauna_highlights: Translation;
  tips: Translation[];
}
