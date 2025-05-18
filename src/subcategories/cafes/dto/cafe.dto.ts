import { IsBoolean, IsMongoId, IsNumber, IsString } from 'class-validator';

export class CreateCafeDto {
  @IsMongoId()
  place_id: string;

  @IsNumber()
  price_range: number;

  @IsBoolean()
  pet_friendly: boolean;

  @IsBoolean()
  outdoor_seating: boolean;

  @IsBoolean()
  wifi_available: boolean;

  @IsBoolean()
  work_friendly: boolean;

  @IsString()
  phone_number: string;
}
