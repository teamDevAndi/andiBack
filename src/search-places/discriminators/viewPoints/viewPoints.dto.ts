import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from 'src/search-places/dto/place.dto';

export class ViewPointsDto extends PlaceDto {
  @ApiProperty({ example: 'altitudeMeters' })
  altitudeMeters: number;

  @ApiProperty({ example: 'tips' })
  viewType: Languages[];

  @ApiProperty({ example: true })
  hasTelescope: boolean;

  @ApiProperty({ example: 'tips' })
  tips: Languages[];
}
