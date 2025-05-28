import { IsBoolean, IsMongoId, IsNumber, IsArray } from 'class-validator';

export class CreateLaundryDto {
  @IsMongoId()
  place_id: string;

  @IsArray()
  @IsMongoId({ each: true })
  service_type: string[];

  @IsBoolean()
  pickup_delivery_service: boolean;

  @IsNumber()
  price_per_kg: number;

  @IsBoolean()
  express_service: boolean;

  @IsBoolean()
  self_service_available: boolean;

  @IsArray()
  @IsMongoId({ each: true })
  payment_methods: string[];

  @IsBoolean()
  parking_available: boolean;
}
