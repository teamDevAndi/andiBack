import {
  IsString,
  IsMongoId,
  IsBoolean,
  IsArray,
  IsNumber,
} from 'class-validator';

export class CreateAtmDto {
  @IsMongoId()
  place_id: string;

  @IsString()
  bank_name: string;

  @IsArray()
  @IsMongoId({ each: true })
  currency_available: string[];

  @IsArray()
  @IsMongoId({ each: true })
  languages_available: string[];

  @IsBoolean()
  accepts_foreign_cards: boolean;

  @IsNumber()
  fee_for_foreign_cards: number;

  @IsBoolean()
  deposit_functionality: boolean;

  @IsBoolean()
  contactless_withdrawal: boolean;
}
