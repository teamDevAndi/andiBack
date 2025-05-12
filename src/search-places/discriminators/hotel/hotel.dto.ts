import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class HotelDto extends PlaceDto {
  @ApiProperty({ example: 'room_types' })
  room_types: Languages[];

  @ApiProperty({ example: 'amenities' })
  amenities: Languages[];

  @ApiProperty({ example: 'check_in_time' })
  check_in_time: string;

  @ApiProperty({ example: 'check_out_time' })
  check_out_time: string;

  @ApiProperty({ example: 'parking_available' })
  parking_available: boolean;

  @ApiProperty({ example: 'pet_friendly' })
  pet_friendly: boolean;

  @ApiProperty({ example: 'language_support' })
  language_support: Languages[];

  @ApiProperty({ example: 'distance_to_city_center' })
  distance_to_city_center: number;

  @ApiProperty({ example: 'Phone_Number' })
  Phone_Number: string;
}
