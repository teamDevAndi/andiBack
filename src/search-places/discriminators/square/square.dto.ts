import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';

export class SquareDto {
  @ApiProperty({ example: 'attractions' })
  attractions: Languages[];

  @ApiProperty({ example: 'areaSize' })
  areaSize: number;

  @ApiProperty({ example: 'nearbyFacilities' })
  nearbyFacilities: Languages[];

  @ApiProperty({ example: 'tips' })
  tips: Languages[];
}
