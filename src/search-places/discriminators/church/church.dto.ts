import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';

export class ChurchDto {
  @ApiProperty({ example: 'denomination' })
  denomination: Languages[];

  @ApiProperty({ example: 'construction_date' })
  construction_date: Date;

  @ApiProperty({ example: 'architectural_style' })
  architectural_style: Languages[];

  @ApiProperty({ example: 'internal_guide' })
  internal_guide: boolean;

  @ApiProperty({ example: 'photography_policy' })
  photography_policy: Languages[];

  @ApiProperty({ example: 'facilities' })
  facilities: Languages[];

  @ApiProperty({ example: 'nearby_facilities' })
  nearby_facilities: Languages[];

  @ApiProperty({ example: 'phone_number' })
  phone_number: string;
}
