import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class ParkDto extends PlaceDto {
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
