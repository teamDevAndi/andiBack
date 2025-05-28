import { Types } from 'mongoose';

export interface PlaceLocation {
  id_place: Types.ObjectId;
  latitude: number;
  longitude: number;
  sub_category: string[];
}
