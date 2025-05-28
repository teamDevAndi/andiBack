import { IsBoolean, IsMongoId, IsArray } from 'class-validator';

export class CreateTouristAgencyDto {
  @IsMongoId()
  place_id: string;

  @IsArray()
  @IsMongoId({ each: true })
  tour_types: string[];

  @IsArray()
  @IsMongoId({ each: true })
  languages_offered: string[];

  @IsArray()
  @IsMongoId({ each: true })
  certifications: string[];

  @IsBoolean()
  custom_tours: boolean;

  @IsBoolean()
  online_booking: boolean;

  @IsArray()
  @IsMongoId({ each: true })
  payment_methods: string[];

  @IsBoolean()
  insurance_included: boolean;

  @IsBoolean()
  group_discounts: boolean;

  @IsBoolean()
  pick_up_service: boolean;

  @IsBoolean()
  multi_day_tours: boolean;
}
