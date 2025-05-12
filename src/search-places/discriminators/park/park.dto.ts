import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';

export class ParkDto {
  @ApiProperty({ example: 'areaSize' })
  areaSize: number;

  @ApiProperty({ example: 'facilities' })
  facilities: Languages[];

  @ApiProperty({ example: 'petFriendly' })
  petFriendly: boolean;

  @ApiProperty({ example: 'floraFaunaHighlights' })
  floraFaunaHighlights: Languages[];

  @ApiProperty({ example: 'tips' })
  tips: Languages[];
}
