import { IsArray, IsBoolean, IsMongoId, IsNumber, IsString } from 'class-validator';
import { Translation } from 'src/common/interfaces/base.interface';

export class CreateMuseumDto {
  @IsMongoId()
  place_id: string;

  @IsArray()
  @IsMongoId({ each: true })
  collection_type: string[];

  @IsBoolean()
  internal_guide: boolean;

  @IsBoolean()
  family_friendly: boolean;

  @IsArray()
  photography_policy: Translation[];

  @IsBoolean()
  shop_available: boolean;

  @IsNumber()
  visit_duration: number;

  @IsArray()
  @IsMongoId({ each: true })
  facilities: string[];

  @IsString()
  phone_number: string;
}
