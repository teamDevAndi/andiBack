import { Types } from 'mongoose';

export interface Theater {
  _id?: string;
  place_id: Types.ObjectId;
  seating_capacity: number;
  guided_tour_available: boolean;
}
