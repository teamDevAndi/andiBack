import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';

export class UniqueStoreDto {
  @ApiProperty({ example: 'specialization' })
  specialization: Languages[];

  @ApiProperty({ example: 'price_range' })
  price_range: number;

  @ApiProperty({ example: 'store_size' })
  store_size: number;

  @ApiProperty({ example: 'exclusive_items' })
  exclusive_items: Languages[];

  @ApiProperty({ example: 'gift_wrapping_service' })
  gift_wrapping_service: boolean;

  @ApiProperty({ example: 'delivery_available' })
  delivery_available: boolean;

  @ApiProperty({ example: 'phone_number' })
  phone_number: string;
}
