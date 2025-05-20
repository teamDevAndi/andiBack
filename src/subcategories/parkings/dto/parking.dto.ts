import {
  IsMongoId,
  IsNumber,
  IsBoolean,
  IsArray
} from 'class-validator';

export class CreateParkingDto {
  @IsMongoId()
  place_id: string;
  
  @IsArray()
  @IsMongoId()
  parking_type: string;

  @IsNumber()
  price_per_hour: number;

  @IsNumber()
  price_per_day: number;

  @IsArray()
  @IsMongoId({ each: true })
  payment_methods: string[];

  @IsArray()
  @IsMongoId({ each: true })
  security_features: string[];

  @IsArray()
  @IsMongoId({ each: true })
  vehicle_types_allowed: string[];

  @IsNumber()
  parking_capacity_total: number;

  @IsNumber()
  height_restriction: number;

  @IsBoolean()
  valet_service: boolean;
}
