import { Types } from 'mongoose';
import { Facility } from 'src/facilities/interfaces/facility.interface';


export interface BusTerminal {
  _id?: Types.ObjectId;
  place_id: Types.ObjectId;
  ticket_sales: boolean;
  facilities: Facility[];
  parking_available: boolean;
  wifi_available: boolean;
  luggage_storage: boolean;
  phone_number: string;
}
