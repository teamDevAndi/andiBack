import { ApiProperty } from '@nestjs/swagger';

export class CafeDto {
  @ApiProperty({ example: 'price_range' })
  price_range: number;

  @ApiProperty({ example: 'pet_friendly' })
  pet_friendly: boolean;

  @ApiProperty({ example: 'outdoor_seating' })
  outdoor_seating: boolean;

  @ApiProperty({ example: 'wifi_available' })
  wifi_available: boolean;

  @ApiProperty({ example: 'work_friendly' })
  work_friendly: boolean;

  @ApiProperty({ example: 'phone_number' })
  phone_number: string;
}
