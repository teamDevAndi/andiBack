import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';

export interface TransportStop {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  transport_type: Translation[];
  lines_available: Translation[];
  shelter_available: boolean;
  seating_available: boolean;
  frequency: string;
}
