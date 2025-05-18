import { IsMongoId, IsArray, IsBoolean, IsNumber } from 'class-validator';
import { Translation } from 'src/common/interfaces/base.interface';


export class CreateMarketDto {
  @IsMongoId()
  place_id: string;

  @IsArray()
  @IsMongoId({ each: true })
  market_type: string[];

  @IsNumber()
  number_of_stalls: number;

  @IsBoolean()
  local_producers_only: boolean;

  @IsBoolean()
  cash_only: boolean;

  @IsBoolean()
  bargaining_allowed: boolean;

  @IsBoolean()
  food_court_available: boolean;

  @IsBoolean()
  pet_friendly: boolean;

  @IsArray()
  tips: Translation[];
}
