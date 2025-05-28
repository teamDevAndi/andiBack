import {
  IsMongoId,
  IsArray,
  IsBoolean,
  IsString
} from 'class-validator';

export class CreateAirportDto {
  @IsMongoId()
  place_id: string;

  @IsString()
  airport_code: string;

  @IsArray()
  @IsMongoId({ each: true })
  transport_options: string[];

  @IsBoolean()
  luggage_storage: boolean;

  @IsBoolean()
  wifi_available: boolean;

  @IsArray()
  @IsMongoId({ each: true })
  facilities: string[];
}
