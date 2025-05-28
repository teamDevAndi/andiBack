import { IsBoolean, IsMongoId, IsNumber, IsArray, IsString } from 'class-validator';

export class CreateMallDto {
  @IsMongoId()
  place_id: string;

  @IsNumber()
  number_of_stores: number;

  @IsArray()
  @IsMongoId({ each: true })
  store_types: string[];

  @IsBoolean()
  parking_available: boolean;

  @IsBoolean()
  food_court_available: boolean;

  @IsArray()
  @IsMongoId({ each: true })
  entertainment_area: string[];

  @IsBoolean()
  wifi_available: boolean;

  @IsBoolean()
  security_services: boolean;

  @IsBoolean()
  pet_friendly: boolean;

  @IsBoolean()
  atm_service: boolean;

  @IsString()
  phone_number: string;
}
