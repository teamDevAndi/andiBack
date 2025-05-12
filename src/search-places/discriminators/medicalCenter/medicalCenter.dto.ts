import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';

export class MedicalCenterDto {
  @ApiProperty({ example: 'specialties' })
  specialties: Languages[];

  @ApiProperty({ example: 'emergency_service' })
  emergency_service: boolean;

  @ApiProperty({ example: 'appointment_required' })
  appointment_required: boolean;

  @ApiProperty({ example: 'insurance_accepted' })
  insurance_accepted: Languages[];

  @ApiProperty({ example: 'pharmacy_available' })
  pharmacy_available: boolean;

  @ApiProperty({ example: 'ambulance_service' })
  ambulance_service: boolean;

  @ApiProperty({ example: 'language_support' })
  language_support: Languages[];

  @ApiProperty({ example: 'parking_available' })
  parking_available: boolean;

  @ApiProperty({ example: 'telemedicine_available' })
  telemedicine_available: boolean;

  @ApiProperty({ example: 'phone_number' })
  phone_number: string;
}
