import { Types } from 'mongoose';

export interface PlaceInformation {
  _id?: Types.ObjectId[];
  id_place: Types.ObjectId[];
  historical: string;
  architectural: string;
  cultural: string;
  popular: string;
}
