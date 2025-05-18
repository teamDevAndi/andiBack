import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface Viewpoint {
  place_id: Types.ObjectId;
  altitude_meters: number;
  view_type: Translation[];
  has_telescope: boolean;
  tips: Translation[];
}
