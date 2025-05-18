import { IsArray, IsBoolean, IsMongoId, IsNumber, IsString } from 'class-validator';

export class CreateRestaurantDto {
  @IsMongoId()
  place_id: string;

  @IsArray()
  @IsMongoId({ each: true })
  cuisine_type: string[];

  @IsNumber()
  price_range: number;

  @IsBoolean()
  reservation_required: boolean;

  @IsArray()
  @IsString({ each: true })
  special_dishes: string[];

  @IsArray()
  @IsMongoId({ each: true })
  dietary_options: string[];

  @IsBoolean()
  outdoor_seating: boolean;

  @IsBoolean()
  pet_friendly: boolean;

  @IsBoolean()
  wifi_available: boolean;

  @IsString()
  phone_number: string;
}
