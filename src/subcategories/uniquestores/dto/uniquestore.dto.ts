import { IsBoolean, IsMongoId, IsNumber, IsArray, IsString } from 'class-validator';

export class CreateUniqueStoreDto {
  @IsMongoId()
  place_id: string;

  @IsArray()
  @IsMongoId({ each: true })
  specialization: string[];

  @IsNumber()
  price_range: number;

  @IsNumber()
  store_size: number;

  @IsArray()
  @IsMongoId({ each: true })
  exclusive_items: string[];

  @IsBoolean()
  gift_wrapping_service: boolean;

  @IsBoolean()
  delivery_available: boolean;

  @IsString()
  phone_number: string;
}
