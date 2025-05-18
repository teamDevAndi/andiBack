import { IsBoolean, IsMongoId, IsString, IsArray } from 'class-validator';

export class CreateInfotourDto {
  @IsMongoId()
  place_id: string;

  @IsArray()
  @IsMongoId({ each: true })
  language_support: string[];

  @IsString()
  phone_number: string;

  @IsBoolean()
  souvenirs_available: boolean;

  @IsBoolean()
  wifi: boolean;

  @IsBoolean()
  parking_available: boolean;

  @IsBoolean()
  charging_stations: boolean;
}
