import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class ParkingDto extends PlaceDto {
  @ApiProperty({ example: 'parking_type' })
  parking_type: Languages[];

  @ApiProperty({ example: 'price_per_hour' })
  price_per_hour: number;

  @ApiProperty({ example: 'price_per_day' })
  price_per_day: number;

  @ApiProperty({ example: 'payment_methods' })
  payment_methods: Languages[];

  @ApiProperty({ example: 'security_features' })
  security_features: Languages[];

  @ApiProperty({ example: 'vehicle_types_allowed' })
  vehicle_types_allowed: Languages[];

  @ApiProperty({ example: 'parking_capacity_total' })
  parking_capacity_total: number;

  @ApiProperty({ example: 'height_restriction' })
  height_restriction: number;

  @ApiProperty({ example: 'valet_service' })
  valet_service: boolean;
}
