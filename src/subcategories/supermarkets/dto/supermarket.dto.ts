import { IsMongoId, IsArray, IsBoolean } from 'class-validator';

export class CreateSupermarketDto {
  @IsMongoId()
  place_id: string;

  @IsArray()
  @IsMongoId({ each: true })
  product_categories: string[];

  @IsBoolean()
  parking_available: boolean;

  @IsArray()
  @IsMongoId({ each: true })
  payment_methods: string[];

  @IsBoolean()
  pharmacy_available: boolean;
}
