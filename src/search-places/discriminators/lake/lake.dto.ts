import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class LakeDto extends PlaceDto {
  @ApiProperty({ example: 'surfaceAreaLake' })
  surfaceAreaLake: number;

  @ApiProperty({ example: 'maxDepth' })
  maxDepth: number;

  @ApiProperty({ example: 'altitude' })
  altitude: number;

  @ApiProperty({ example: 'waterType' })
  waterType: Languages[];

  @ApiProperty({ example: 'activitiesAllowed' })
  activitiesAllowed: Languages[];

  @ApiProperty({ example: 'floraFaunaHighlights' })
  floraFaunaHighlights: Languages[];

  @ApiProperty({ example: 'facilities' })
  facilities: Languages[];

  @ApiProperty({ example: 'safetyInformation' })
  safetyInformation: Languages[];

  @ApiProperty({ example: 'tips' })
  tips: Languages[];
}
