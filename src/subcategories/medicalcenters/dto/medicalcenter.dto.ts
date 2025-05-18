import {
  IsMongoId,
  IsArray,
  IsBoolean,
  IsString,
} from 'class-validator';

export class CreateMedicalCenterDto {
  @IsMongoId()
  place_id: string;

  @IsArray()
  @IsMongoId({ each: true })
  specialties: string[];

  @IsBoolean()
  emergency_service: boolean;

  @IsBoolean()
  appointment_required: boolean;

  @IsArray()
  @IsMongoId({ each: true })
  insurance_accepted: string[];

  @IsBoolean()
  pharmacy_available: boolean;

  @IsBoolean()
  ambulance_service: boolean;

  @IsArray()
  @IsMongoId({ each: true })
  language_support: string[];

  @IsBoolean()
  parking_available: boolean;

  @IsBoolean()
  telemedicine_available: boolean;

  @IsString()
  phone_number: string;
}
