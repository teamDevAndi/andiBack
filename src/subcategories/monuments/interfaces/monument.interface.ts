import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';


export interface Monument {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  construction_date: Date;
  material_used: Translation;
  height: number;
  nearby_facilities: Translation;
}
