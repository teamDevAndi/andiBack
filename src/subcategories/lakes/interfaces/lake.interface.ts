import { Translation } from 'src/common/interfaces/base.interface';
import { Facility } from 'src/facilities/interfaces/facility.interface';


export interface Lake {
  _id?: string;
  place_id: string;
  surface_area_lake: number;
  max_depth: number;
  altitude: number;
  water_type: string;
  activities_allowed: string[];
  flora_fauna_highlights: string[];
  facilities: Facility[];
  safety_information: Translation[];
  tips: Translation[];
}