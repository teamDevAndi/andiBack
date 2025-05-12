import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class RestaurantDto extends PlaceDto{
  @ApiProperty({ example: 'cuisine_type' })
  cuisine_type: Languages[];

  @ApiProperty({ example: 'price_range' })
  price_range: string;

  @ApiProperty({ example: 'reservation_required' })
  reservation_required: boolean;

  @ApiProperty({ example: 'special_dishes' })
  special_dishes: Languages[];

  @ApiProperty({ example: 'dietary_options' })
  dietary_options: Languages[];

  @ApiProperty({ example: 'outdoor_seating' })
  outdoor_seating: boolean;

  @ApiProperty({ example: 'pet_friendly' })
  pet_friendly: boolean;

  @ApiProperty({ example: 'wifi_available' })
  wifi_available: boolean;

  @ApiProperty({ example: 'phone_number' })
  phone_number: string;
}
