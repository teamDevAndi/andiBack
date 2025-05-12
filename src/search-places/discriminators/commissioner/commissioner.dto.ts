import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';

export class CommissionerDto {
  @ApiProperty({ example: 'emergency_contact_number' })
  emergency_contact_number: number;

  @ApiProperty({ example: 'tourist_assistance' })
  tourist_assistance: boolean;

  @ApiProperty({ example: 'language_support' })
  language_support: Languages[];

  @ApiProperty({ example: 'detention_facilities' })
  detention_facilities: boolean;

  @ApiProperty({ example: 'parking_available' })
  parking_available: boolean;

  @ApiProperty({ example: 'lost_and_found_service' })
  lost_and_found_service: boolean;
}
