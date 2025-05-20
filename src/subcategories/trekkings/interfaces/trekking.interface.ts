import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface Trekking {
  place_id: Types.ObjectId;
  estimated_duration_minutes: number;
  distance_meters: number;
  difficult_level: number;
  max_altitude_meters: number;
  camping_allowed: boolean;
  wildlife_sightings: boolean;
  equipment_required: Translation[];
  tips: Translation[];
}
