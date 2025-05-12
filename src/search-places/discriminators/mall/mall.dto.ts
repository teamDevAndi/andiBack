import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';

export class MallDto {
  @ApiProperty({ example: 'number_of_stores' })
  number_of_stores: number;

  @ApiProperty({ example: 'store_types' })
  store_types: Languages[];

  @ApiProperty({ example: 'parking_available' })
  parking_available: boolean;

  @ApiProperty({ example: 'food_court_available' })
  food_court_available: boolean;

  @ApiProperty({ example: 'entertainment_area' })
  entertainment_area: Languages[];

  @ApiProperty({ example: 'wifi_available' })
  wifi_available: boolean;

  @ApiProperty({ example: 'security_services' })
  security_services: boolean;

  @ApiProperty({ example: 'pet_friendly' })
  pet_friendly: boolean;

  @ApiProperty({ example: 'atm_service' })
  atm_service: boolean;

  @ApiProperty({ example: 'phone_number' })
  phone_number: string;
}
