import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';

export class SuperMarketDto {
  @ApiProperty({ example: 'product_categories' })
  product_categories: Languages[];

  @ApiProperty({ example: 'parking_available' })
  parking_available: boolean;

  @ApiProperty({ example: 'payment_methods' })
  payment_methods: Languages[];

  @ApiProperty({ example: 'pharmacy_available' })
  pharmacy_available: boolean;
}
