import { IsArray, IsBoolean, IsMongoId, IsNumber } from 'class-validator';
import { Translation } from 'src/common/interfaces/base.interface';


export class CreateFoodAreaDto {
  @IsMongoId()
  place_id: string;

  @IsArray()
  @IsMongoId({ each: true })
  vendor_types: string[];

  @IsNumber()
  number_of_stalls: number;

  @IsNumber()
  price_range: number;

  @IsNumber()
  seating_capacity: number;

  @IsBoolean()
  family_friendly: boolean;

  @IsBoolean()
  pet_friendly: boolean;

  @IsArray()
  tips: Translation[];
}
