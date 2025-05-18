import { IsDateString, IsMongoId, IsNumber, IsOptional, IsArray } from 'class-validator';

export class CreateMonumentDto {
  @IsMongoId()
  place_id: string;

  @IsDateString()
  construction_date: string;

  @IsArray()
  @IsMongoId({ each: true })
  material_used: string[];

  @IsNumber()
  height: number;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  readonly nearby_facilities?: string[];
}
