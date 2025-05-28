import { IsBoolean, IsMongoId, IsNumber, IsArray, IsOptional } from 'class-validator';
import { Translation } from 'src/common/interfaces/base.interface';

export class CreateRuinDto {
  @IsMongoId()
  place_id: string;

  @IsMongoId()
  historical_period: string;

  @IsBoolean()
  internal_guide: boolean;

  @IsNumber()
  conservation_status: number;

  @IsNumber()
  visit_duration: number;

  @IsArray()
  photography_policy: Translation[];

  @IsOptional()
  @IsMongoId({ each: true })
  readonly nearby_facilities?: string[];
}
