import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';

export class TouristAgencyDto {
  @ApiProperty({ example: 'tour_types' })
  tour_types: Languages[];

  @ApiProperty({ example: 'languages_offered' })
  languages_offered: Languages[];

  @ApiProperty({ example: 'certifications' })
  certifications: Languages[];

  @ApiProperty({ example: 'custom_tours' })
  custom_tours: boolean;

  @ApiProperty({ example: 'online_booking' })
  online_booking: boolean;

  @ApiProperty({ example: 'payment_methods' })
  payment_methods: Languages[];

  @ApiProperty({ example: 'insurance_included' })
  insurance_included: boolean;

  @ApiProperty({ example: 'group_discounts' })
  group_discounts: boolean;

  @ApiProperty({ example: 'pick_up_service' })
  pick_up_service: boolean;

  @ApiProperty({ example: 'multi_day_tours' })
  multi_day_tours: boolean;
}
