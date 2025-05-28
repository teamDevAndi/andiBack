import { IsMongoId, IsNumber, IsOptional, IsArray } from 'class-validator';
import { Translation } from 'src/common/interfaces/base.interface';

export class CreateLakeDto {
  @IsMongoId()
  place_id: string;

  @IsNumber()
  surface_area_lake: number;

  @IsNumber()
  max_depth: number;

  @IsNumber()
  altitude: number;

  @IsMongoId()
  water_type: string;

  @IsMongoId({ each: true })
  activities_allowed: string[];

  @IsMongoId({ each: true })
  flora_fauna_highlights: string[];

  @IsOptional()
  @IsMongoId({ each: true })
  readonly facilities?: string[];

  @IsArray()
  safety_information: Translation[];

  @IsArray()
  tips: Translation[];
}
