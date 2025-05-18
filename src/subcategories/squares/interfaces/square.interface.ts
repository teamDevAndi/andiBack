import { Translation } from 'src/common/interfaces/base.interface';

export interface Square {
  _id?: string;
  place_id: string;
  attractions: string[];
  area_size: number;
  nearby_facilities: string[];
  tips: Translation[];
}
