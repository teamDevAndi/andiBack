import { Types } from 'mongoose';

export interface TransportStop {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  transport_type: Types.ObjectId[];
  lines_available: Types.ObjectId[];
  shelter_available: boolean;
  seating_available: boolean;
  frequency: string;
}
