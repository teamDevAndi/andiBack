import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class FoodAreaDto extends PlaceDto {
  @ApiProperty({ example: 'vendor_types' })
  vendor_types: Languages[];

  @ApiProperty({ example: 'number_of_stalls' })
  number_of_stalls: number;

  @ApiProperty({ example: 'price_range' })
  price_range: number;

  @ApiProperty({ example: 'seating_capacity' })
  seating_capacity: number;

  @ApiProperty({ example: 'family_friendly' })
  family_friendly: boolean;

  @ApiProperty({ example: 'pet_friendly' })
  pet_friendly: boolean;

  @ApiProperty({ example: 'tips' })
  tips: Languages[];
}
