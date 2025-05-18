import { IsString } from 'class-validator';

export class TranslationDto {
  @IsString()
  es: string;

  @IsString()
  en: string;

  @IsString()
  fr: string;

  @IsString()
  ge: string;
}
