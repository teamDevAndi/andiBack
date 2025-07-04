import { Types } from "mongoose";

export interface NearbyPlace {
  _id: Types.ObjectId | string;
  name: string;
  address: string;
  category: string;
  sub_category: string;
  picture_principal: string;
  place_location: string[];

}