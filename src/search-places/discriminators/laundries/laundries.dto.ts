import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';

export class LaundriesDto {
  @ApiProperty({ example: 'service_type' })
  service_type: Languages[];

  @ApiProperty({ example: 'pickup_delivery_service' })
  pickup_delivery_service: boolean;

  @ApiProperty({ example: 'price_per_kg' })
  price_per_kg: number;

  @ApiProperty({ example: 'express_service' })
  express_service: boolean;

  @ApiProperty({ example: 'self_service_available' })
  self_service_available: boolean;

  @ApiProperty({ example: 'payment_methods' })
  payment_methods: Languages[];

  @ApiProperty({ example: 'parking_available' })
  parking_available: boolean;
}
