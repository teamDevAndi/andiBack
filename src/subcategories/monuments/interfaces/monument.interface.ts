import { Types } from 'mongoose';
import { Facility } from 'src/facilities/interfaces/facility.interface';


export interface Monument {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  construction_date: Date;
  material_used: Types.ObjectId[];
  height: number;
  nearby_facilities: Facility[];
}
