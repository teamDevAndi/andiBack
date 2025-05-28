import { IsBoolean, IsMongoId, IsNumber, IsArray } from 'class-validator';

export class CreateCommissionerDto {
  @IsMongoId()
  place_id: string;

  @IsNumber()
  emergency_contact_number: number;

  @IsBoolean()
  tourist_assistance: boolean;

  @IsArray()
  @IsMongoId({ each: true })
  language_support: string[];

  @IsBoolean()
  detention_facilities: boolean;

  @IsBoolean()
  parking_available: boolean;

  @IsBoolean()
  lost_and_found_service: boolean;
}
