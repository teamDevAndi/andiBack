import { IsString, IsNotEmpty, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { TranslationDto } from '../../common/dto/translations.dto';

export class TimeRangeDto {
  @IsNumber()
  day_start_range: number;

  @IsNumber()
  day_end_range: number;

  @IsString()
  @IsNotEmpty()
  open: string;

  @IsString()
  @IsNotEmpty()
  close: string;
}

export class CostDto {
  @ValidateNested()
  @Type(() => TranslationDto)
  reason: TranslationDto;

  @IsNumber()
  mount: number;
}

export class CreatePlaceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  picture_principal: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  sub_category: string;

  @IsEnum(['included', 'not_required', 'optional'])
  guidance_required: 'included' | 'not_required' | 'optional';

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TimeRangeDto)
  times: TimeRangeDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CostDto)
  costs: CostDto[];

  @ValidateNested()
  @Type(() => TranslationDto)
  description_place: TranslationDto;

  @IsArray()
  @IsString({ each: true })
  labels: string[];

  @IsNumber()
  rating: number;

  @IsString()
  @IsNotEmpty()
  code_hash: string;
}
