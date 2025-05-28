import {
  IsMongoId,
  IsArray,
  IsBoolean,
  IsString
} from 'class-validator';

export class CreateBusTerminalDto {
  @IsMongoId()
  place_id: string;

  @IsBoolean()
  ticket_sales: boolean;

  @IsArray()
  @IsMongoId({ each: true })
  facilities: string[];

  @IsBoolean()
  parking_available: boolean;

  @IsBoolean()
  wifi_available: boolean;

  @IsBoolean()
  luggage_storage: boolean;

  @IsString()
  phone_number: string;
}
