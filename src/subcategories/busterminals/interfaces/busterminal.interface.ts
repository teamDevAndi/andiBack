import { Types } from 'mongoose';
import { Translation } from 'src/common/interfaces/base.interface';


export interface BusTerminal {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  ticket_sales: boolean;
  facilities: Translation;
  parking_available: boolean;
  wifi_available: boolean;
  luggage_storage: boolean;
  phone_number: string;
}
