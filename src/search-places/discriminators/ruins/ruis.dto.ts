import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class RuinsDto extends PlaceDto {
  @ApiProperty({ example: 'historical_period' })
  historical_period: Languages[];

  @ApiProperty({ example: 'internal_guide' })
  internal_guide: boolean;

  @ApiProperty({ example: 'conservation_status' })
  conservation_status: number;

  @ApiProperty({ example: 'visit_duration' })
  visit_duration: number;

  @ApiProperty({ example: 'photography_policy' })
  photography_policy: Languages[];

  @ApiProperty({ example: 'nearby_facilities' })
  nearby_facilities: Languages[];
}
