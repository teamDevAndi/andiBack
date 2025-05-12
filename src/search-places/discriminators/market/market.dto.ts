import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class MarketDto extends PlaceDto {
  @ApiProperty({ example: 'market_type' })
  market_type: Languages[];

  @ApiProperty({ example: 'number_of_stalls' })
  number_of_stalls: number;

  @ApiProperty({ example: 'local_producers_only' })
  local_producers_only: boolean;

  @ApiProperty({ example: 'cash_only' })
  cash_only: boolean;

  @ApiProperty({ example: 'bargaining_allowed' })
  bargaining_allowed: boolean;

  @ApiProperty({ example: 'food_court_available' })
  food_court_available: boolean;

  @ApiProperty({ example: 'pet_friendly' })
  pet_friendly: boolean;

  @ApiProperty({ example: 'tips' })
  tips: Languages[];
}
