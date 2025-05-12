import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class SquareDto extends PlaceDto {
  @ApiProperty({ example: 'attractions' })
  attractions: Languages[];

  @ApiProperty({ example: 'areaSize' })
  areaSize: number;

  @ApiProperty({ example: 'nearbyFacilities' })
  nearbyFacilities: Languages[];

  @ApiProperty({ example: 'tips' })
  tips: Languages[];
}
