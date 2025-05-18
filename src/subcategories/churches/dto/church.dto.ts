import { IsBoolean, IsDateString, IsMongoId, IsOptional,IsNotEmpty, IsPhoneNumber, IsArray } from 'class-validator';
import { Translation } from 'src/common/interfaces/base.interface';

export class CreateChurchDto {
  @IsMongoId()
  @IsNotEmpty()
  place_id: string;

  @IsMongoId()
  denomination: string;

  @IsDateString()
  construction_date: Date;

  @IsMongoId()
  architectural_style: string;

  @IsBoolean()
  internal_guide: boolean;

  @IsArray()
  photography_policy: Translation[];

  @IsOptional()
  @IsMongoId({ each: true })
  readonly facilities?: string[];

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  readonly nearby_facilities?: string[];

  @IsPhoneNumber('BO')
  phone_number: string;
}
