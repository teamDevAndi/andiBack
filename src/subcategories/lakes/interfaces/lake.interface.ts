import { Translation } from 'src/common/interfaces/base.interface';

export interface Lake {
  _id?: string;
  place_id: string;
  surface_area_lake: number;
  max_depth: number;
  altitude: number;
  water_type: Translation;
  activities_allowed: Translation;
  flora_fauna_highlights: Translation;
  facilities: Translation;
  safety_information: Translation[];
  tips: Translation[];
}