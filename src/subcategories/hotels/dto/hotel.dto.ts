import { IsArray, IsBoolean, IsMongoId, IsNumber, IsString } from 'class-validator';

export class CreateHotelDto {
  @IsMongoId()
  place_id: string;

  @IsArray()
  @IsMongoId({ each: true })
  room_types: string[];

  @IsArray()
  @IsMongoId({ each: true })
  amenities: string[];

  @IsString()
  check_in_time: string;

  @IsString()
  check_out_time: string;

  @IsBoolean()
  parking_available: boolean;

  @IsBoolean()
  pet_friendly: boolean;

  @IsArray()
  @IsMongoId({ each: true })
  language_support: string[];

  @IsNumber()
  distance_to_city_center: number;

  @IsString()
  phone_number: string;
}
