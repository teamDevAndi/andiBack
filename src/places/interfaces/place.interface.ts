import { Translation } from '../../common/interfaces/base.interface';

export interface TimeRange {
  day_start_range: number;
  day_end_range: number;
  open: string;
  close: string;
}

export interface Cost {
  reason: Translation;
  mount: number;
}

export interface Place {
  _id?: string;
  name: string;
  picture_principal: string;
  category: string;
  sub_category?: string;
  guidance_required?: 'included' | 'optional' | 'none';
  address?: string;
  times?: TimeRange[];
  costs?: Cost[];
  description_place: Translation;
  labels?: string[];
  rating?: number;
  code_hash?: string;
}
